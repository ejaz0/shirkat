import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDLogo = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent background
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // Create materials
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        // Create the dot of the "i"
        const dotGeometry = new THREE.SphereGeometry(0.2, 32, 32);
        const dot = new THREE.Mesh(dotGeometry, material);
        dot.position.y = 0.7;

        // Create the body of the "i"
        const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
        const body = new THREE.Mesh(bodyGeometry, material);
        body.position.y = -0.2;

        // Create the circle around the "i"
        const circleGeometry = new THREE.TorusGeometry(1.2, 0.05, 16, 100);
        const circle = new THREE.Mesh(circleGeometry, material);
        circle.position.z = 0.1; // Ensure the circle is not behind the "i"

        // Create a group to contain the "i" and the circle
        const logoGroup = new THREE.Group();
        logoGroup.add(dot);
        logoGroup.add(body);
        logoGroup.add(circle);
        scene.add(logoGroup);

        camera.position.z = 3;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            logoGroup.rotation.x += 0.01; // Rotate the group around the x-axis
            logoGroup.rotation.y += 0.01; // Rotate the group around the y-axis
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on component unmount
        return () => {
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            style={{ width: '100%', height: '100%' }} 
            role="img" 
            aria-label="3D rotating company logo"
        >
            <noscript>Your browser does not support JavaScript, which is needed to view this 3D logo.</noscript>
        </div>
    );
};

export default ThreeDLogo;
