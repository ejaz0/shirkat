import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDSuitcase = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // antialias: true for better quality
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // Create materials
        const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 }); // Brown color
        const handleMaterial = new THREE.MeshPhongMaterial({ color: 0xD4AF37 }); // Gold color

        // Create the body of the suitcase
        const bodyGeometry = new THREE.BoxGeometry(2.5, 1.5, 0.7, 50, 50, 50); // Increased segments for better quality
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        scene.add(body);

        // Create the handle of the suitcase
        const handleGeometry = new THREE.TorusGeometry(0.4, 0.07, 30, 200); // Increased segments for better quality
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.rotation.x = Math.PI / 2;
        handle.position.y = 1.1; // Adjusted position
        scene.add(handle);

        // Add light
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        camera.position.z = 5; // Adjusted camera position to fit larger suitcase

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            body.rotation.y += 0.005; // Slower rotation for smoother animation
            handle.rotation.y += 0.005; // Slower rotation for smoother animation
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on component unmount
        return () => {
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '300px', height: '300px' }} />; // Increased size of the container
};

export default ThreeDSuitcase;
