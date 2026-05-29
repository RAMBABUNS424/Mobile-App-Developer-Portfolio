import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect mobile
    const isMobile = window.innerWidth < 768;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(0.4, 0.4, 0.4),
      new THREE.SphereGeometry(0.25, 16, 16),
      new THREE.TorusGeometry(0.25, 0.08, 12, 48),
      new THREE.OctahedronGeometry(0.25),
      new THREE.TetrahedronGeometry(0.3),
    ];

    // Neon materials
    const materials = [
      new THREE.MeshPhongMaterial({
        color: 0x3b82f6, // Electric Blue
        shininess: 80,
        specular: 0x00ffff,
        emissive: 0x1e40af,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.85,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x8b5cf6, // Neon Purple
        shininess: 80,
        specular: 0xff00ff,
        emissive: 0x5b21b6,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.85,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x06b6d4, // Neon Cyan
        shininess: 80,
        specular: 0xffffff,
        emissive: 0x0e7490,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.85,
      })
    ];

    const meshes: THREE.Mesh[] = [];
    const numShapes = isMobile ? 8 : 16;

    for (let i = 0; i < numShapes; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      // Random position
      mesh.position.x = (Math.random() - 0.5) * 8;
      mesh.position.y = (Math.random() - 0.5) * 8;
      mesh.position.z = (Math.random() - 0.5) * 4;

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      // Store random velocity
      (mesh as any).velocity = {
        x: (Math.random() - 0.5) * 0.006,
        y: (Math.random() - 0.5) * 0.006,
        rotation: (Math.random() - 0.5) * 0.015,
      };

      scene.add(mesh);
      meshes.push(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 1.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x3b82f6, 1.5);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x8b5cf6, 1);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    // Particle field 1 (Cyan)
    const pGeometry1 = new THREE.BufferGeometry();
    const pCount1 = isMobile ? 200 : 600;
    const posArray1 = new Float32Array(pCount1 * 3);

    for (let i = 0; i < pCount1 * 3; i++) {
      posArray1[i] = (Math.random() - 0.5) * 15;
    }
    pGeometry1.setAttribute('position', new THREE.BufferAttribute(posArray1, 3));

    const pMaterial1 = new THREE.PointsMaterial({
      size: 0.025,
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles1 = new THREE.Points(pGeometry1, pMaterial1);
    scene.add(particles1);

    // Particle field 2 (Purple)
    const pGeometry2 = new THREE.BufferGeometry();
    const pCount2 = isMobile ? 150 : 400;
    const posArray2 = new Float32Array(pCount2 * 3);

    for (let i = 0; i < pCount2 * 3; i++) {
      posArray2[i] = (Math.random() - 0.5) * 15;
    }
    pGeometry2.setAttribute('position', new THREE.BufferAttribute(posArray2, 3));

    const pMaterial2 = new THREE.PointsMaterial({
      size: 0.025,
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const particles2 = new THREE.Points(pGeometry2, pMaterial2);
    scene.add(particles2);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Animate meshes
      meshes.forEach((mesh) => {
        const velocity = (mesh as any).velocity;
        mesh.position.x += velocity.x;
        mesh.position.y += velocity.y;

        // Bounce off bounds
        if (Math.abs(mesh.position.x) > 4) velocity.x *= -1;
        if (Math.abs(mesh.position.y) > 4) velocity.y *= -1;

        mesh.rotation.x += velocity.rotation;
        mesh.rotation.y += velocity.rotation * 0.7;
      });

      // Animate particles
      particles1.rotation.y += 0.0003;
      particles1.rotation.x += 0.0001;

      particles2.rotation.y -= 0.0002;
      particles2.rotation.z += 0.0001;

      // Smooth camera follow mouse
      if (!isMobile) {
        camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.05;
      }
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      geometries.forEach((geo) => geo.dispose());
      materials.forEach((mat) => mat.dispose());
      pGeometry1.dispose();
      pMaterial1.dispose();
      pGeometry2.dispose();
      pMaterial2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 bg-[#030014]"
      style={{ pointerEvents: 'none' }}
    />
  );
}
