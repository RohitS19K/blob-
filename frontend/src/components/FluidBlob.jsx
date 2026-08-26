import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 5200;
const PALETTE = ["#00E5FF", "#00FF87", "#FF6B00"];
const WEIGHTS = [0.42, 0.34, 0.24];

const dotTexture = () => {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.5)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
};

const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
const easeInOutCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

function Particles({ interaction }) {
  const pointsRef = useRef();
  const pendingShatter = useRef(false);
  const { camera, pointer } = useThree();
  const tmp = useMemo(() => ({ ray: new THREE.Vector3(), local: new THREE.Vector3() }), []);

  const { positions, homes, scatters, colors, seeds } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const homes = new Float32Array(COUNT * 3);
    const scatters = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    const color = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      const t = (i + 0.5) / COUNT;
      const phi = Math.acos(1 - 2 * t);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 2.15 * Math.cbrt(Math.random());
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.85;
      const z = r * Math.cos(phi) * 0.9;
      homes.set([x, y, z], i * 3);
      positions.set([x, y, z], i * 3);
      const rv = Math.random();
      color.set(rv < WEIGHTS[0] ? PALETTE[0] : rv < WEIGHTS[0] + WEIGHTS[1] ? PALETTE[1] : PALETTE[2]);
      colors.set([color.r, color.g, color.b], i * 3);
      seeds[i] = Math.random();
    }
    return { positions, homes, scatters, colors, seeds };
  }, []);

  const texture = useMemo(dotTexture, []);

  useEffect(() => {
    interaction.current.trigger = () => {
      pendingShatter.current = true;
    };
  }, [interaction]);

  useFrame((state, delta) => {
    const pts = pointsRef.current;
    if (!pts) return;
    const t = state.clock.elapsedTime;
    const it = interaction.current;

    if (pendingShatter.current) {
      pendingShatter.current = false;
      it.shatterStart = t;
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        const dir = new THREE.Vector3(
          homes[ix] + (Math.random() - 0.5) * 1.4,
          homes[ix + 1] + (Math.random() - 0.5) * 1.4,
          homes[ix + 2] + (Math.random() - 0.5) * 1.4
        ).normalize();
        const mag = 3.4 + Math.random() * 4.6;
        scatters.set([homes[ix] + dir.x * mag, homes[ix + 1] + dir.y * mag, homes[ix + 2] + dir.z * mag], ix);
      }
    }

    tmp.ray.set(pointer.x, pointer.y, 0.5).unproject(camera).sub(camera.position).normalize();
    const s = -camera.position.z / tmp.ray.z;
    tmp.local.set(camera.position.x + tmp.ray.x * s, camera.position.y + tmp.ray.y * s, 0);
    pts.worldToLocal(tmp.local);
    const { x: mx, y: my, z: mz } = tmp.local;

    let m = 0;
    if (it.shatterStart >= 0) {
      const el = t - it.shatterStart;
      if (el >= 2) it.shatterStart = -1;
      else m = el < 0.22 ? easeOutCubic(el / 0.22) : 1 - easeInOutCubic((el - 0.22) / 1.78);
    }

    const k = Math.min(1, delta * 4.2);
    const attr = (1 - m) * 0.6;
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      const seed = seeds[i];
      const sp = 0.5 + seed * 0.9;
      const ph = seed * Math.PI * 2;
      let tx = homes[ix] + Math.sin(t * sp + ph) * 0.09;
      let ty = homes[ix + 1] + Math.cos(t * sp * 1.3 + ph) * 0.09;
      let tz = homes[ix + 2] + Math.sin(t * sp * 0.7 + ph * 2) * 0.09;

      const dx = mx - positions[ix];
      const dy = my - positions[ix + 1];
      const dz = mz - positions[ix + 2];
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < 2.9) {
        const f = (1 - Math.sqrt(d2) / 1.7) * attr;
        tx += dx * f;
        ty += dy * f;
        tz += dz * f;
      }

      if (m > 0) {
        tx += (scatters[ix] - tx) * m;
        ty += (scatters[ix + 1] - ty) * m;
        tz += (scatters[ix + 2] - tz) * m;
      }

      positions[ix] += (tx - positions[ix]) * k;
      positions[ix + 1] += (ty - positions[ix + 1]) * k;
      positions[ix + 2] += (tz - positions[ix + 2]) * k;
    }

    pts.geometry.attributes.position.needsUpdate = true;
    pts.rotation.y = t * 0.09;
    pts.rotation.x = Math.sin(t * 0.14) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={COUNT} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={texture}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export const FluidBlob = () => {
  const interaction = useRef({ shatterStart: -1, trigger: null });

  return (
    <div
      className="h-full w-full cursor-crosshair"
      onPointerDown={() => interaction.current.trigger?.()}
      data-testid="fluid-blob-canvas"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 6.4], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Particles interaction={interaction} />
      </Canvas>
    </div>
  );
};
