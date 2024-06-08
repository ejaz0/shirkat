import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDGlobe = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent background
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // Create the globe
        const geometry = new THREE.SphereGeometry(1.5, 25, 25); // Increased size of the globe
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        camera.position.z = 4; // Adjusted camera position to fit larger globe

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.01; // Rotate the globe
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on component unmount
        return () => {
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '250px', height: '250px' }} />; // Increased size of the container
};

export default ThreeDGlobe;
