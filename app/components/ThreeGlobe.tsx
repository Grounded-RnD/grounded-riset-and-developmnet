// components/ThreeGlobe.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Globe from 'three-globe';
import WorldMap from '@/public/images/world-map-2.jpeg';

const ThreeGlobe: React.FC = () => {
  const globeContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = globeContainer.current;

    if (!container) return;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Set up the globe
    const globe = new Globe()
      .globeImageUrl(WorldMap.src) // Pass the URL string
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-bump.jpg') // Replace with your own bump map texture URL
      .showGraticules(true) // Show grid lines
      .arcsData([]) // Optional: You can add arcs here if needed
      .labelsData([]) // Optional: You can add labels here if needed
      .pointsData([]) // Optional: You can add points here if needed
      .pointLat('lat')
      .pointLng('lng')
      .pointColor('color')
      .pointAltitude('altitude')
      .pointRadius('radius')
      .onGlobeReady(() => {
        globe.rotation.y = -Math.PI / 2; // Rotate the globe to show the desired view
      });

    scene.add(globe);

    // Set up camera position
    camera.position.z = 250;

    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.position.set(5, 3, 5).normalize();
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.0015; // Rotate the globe slowly
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const onWindowResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={globeContainer} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeGlobe;
