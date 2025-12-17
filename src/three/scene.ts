import * as THREE from "three";

type Cleanup = () => void;

export function mountScene(canvas: HTMLCanvasElement): Cleanup {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
  camera.position.set(0, 0.7, 5.5);
  scene.add(camera);

  // Lights
  const key = new THREE.DirectionalLight(0xffffff, 1.05);
  key.position.set(4, 6, 4);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0x7c5cff, 0.7);
  fill.position.set(-6, 2, 6);
  scene.add(fill);

  const rim = new THREE.PointLight(0x28d7ff, 1.1, 30);
  rim.position.set(0, 2.5, -6);
  scene.add(rim);

  // Main object
  const knotGeo = new THREE.TorusKnotGeometry(1.05, 0.32, 220, 32);
  const knotMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.65,
    roughness: 0.25,
    emissive: new THREE.Color(0x10152b),
    envMapIntensity: 0.9
  });
  const knot = new THREE.Mesh(knotGeo, knotMat);
  knot.position.set(1.2, 0.2, -0.5);
  scene.add(knot);

  // Particles
  const count = 900;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 10 * Math.random();
    const theta = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 6;
    positions[i * 3 + 0] = Math.cos(theta) * r;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(theta) * r - 6;
  }
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const pointsMat = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x8ea1ff,
    transparent: true,
    opacity: 0.55
  });
  const points = new THREE.Points(pointsGeo, pointsMat);
  scene.add(points);

  // Subtle background fog
  scene.fog = new THREE.Fog(0x070a12, 6, 18);

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();

  const clock = new THREE.Clock();
  let raf = 0;

  function animate() {
    raf = window.requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    knot.rotation.x = 0.25 + t * 0.25;
    knot.rotation.y = 0.35 + t * 0.35;
    knot.position.y = 0.15 + Math.sin(t * 0.8) * 0.06;

    points.rotation.y = t * 0.04;

    renderer.render(scene, camera);
  }
  animate();

  const onResize = () => resize();
  window.addEventListener("resize", onResize, { passive: true });

  // Gentle parallax on pointer
  const onPointerMove = (ev: PointerEvent) => {
    const nx = (ev.clientX / window.innerWidth) * 2 - 1;
    const ny = (ev.clientY / window.innerHeight) * 2 - 1;
    knot.rotation.y += nx * 0.01;
    knot.rotation.x += -ny * 0.01;
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });

  return () => {
    window.cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("pointermove", onPointerMove);
    pointsGeo.dispose();
    pointsMat.dispose();
    knotGeo.dispose();
    knotMat.dispose();
    renderer.dispose();
  };
}


