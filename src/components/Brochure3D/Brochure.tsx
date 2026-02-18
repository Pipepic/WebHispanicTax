"use client";

import React, { useRef, useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { easing } from "maath";

export default function Brochure() {
    const group = useRef<THREE.Group>(null);
    const scroll = useScroll();

    // English Textures ONLY - Removed Spanish textures
    const textures = useTexture([
        "/images/brochure/B00001.jpg",
        "/images/brochure/B00002.jpg",
        "/images/brochure/B00003.jpg",
        "/images/brochure/B00004.jpg",
        "/images/brochure/B00005.jpg",
        "/images/brochure/B00006.jpg",
    ]);

    // Material configuration
    const materialProps = {
        roughness: 0.3,
        metalness: 0.1,
        transparent: false,
        side: THREE.DoubleSide
    };

    useFrame((state, delta) => {
        if (!group.current) return;

        const offset = scroll.offset;

        // Page animation logic
        const pages = group.current.children;

        // Page 1 (Front Cover) - Rotates outwards to the left
        if (pages[0]) {
            const targetRotation = -Math.PI * 0.85 * offset;
            easing.dampE(pages[0].rotation, [0, targetRotation, 0], 0.25, delta);
        }

        // Page 3 (Right Cover) - Rotates outwards to the right
        if (pages[2]) {
            const targetRotation = Math.PI * 0.85 * offset;
            easing.dampE(pages[2].rotation, [0, targetRotation, 0], 0.25, delta);
        }

        // Entire group rotation and position
        easing.dampE(group.current.rotation, [0, -offset * 0.1, 0], 0.25, delta);
        easing.damp3(group.current.position, [0, -0.2, offset * 2], 0.25, delta);
    });

    return (
        <group ref={group} position={[0, -0.2, 0]}>
            {/* Page 1: Left Flap (Cover) */}
            <group position={[-1.5, 0, 0]}>
                <mesh position={[0.75, 0, 0]} castShadow>
                    <boxGeometry args={[1.5, 4, 0.02]} />
                    <meshStandardMaterial {...materialProps} map={textures[0]} attach="material-4" />
                    <meshStandardMaterial {...materialProps} map={textures[5]} attach="material-5" />
                    <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-0" />
                    <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-1" />
                    <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-2" />
                    <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-3" />
                </mesh>
            </group>

            {/* Page 2: Center Section (Fixed) */}
            <mesh position={[0, 0, -0.01]} receiveShadow>
                <boxGeometry args={[1.5, 4, 0.02]} />
                <meshStandardMaterial {...materialProps} map={textures[1]} attach="material-4" />
                <meshStandardMaterial {...materialProps} map={textures[4]} attach="material-5" />
                <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-0" />
                <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-1" />
                <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-2" />
                <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-3" />
            </mesh>

            {/* Page 3: Right Flap */}
            <group position={[1.5, 0, 0]}>
                <mesh position={[-0.75, 0, 0]} castShadow>
                    <boxGeometry args={[1.5, 4, 0.02]} />
                    <meshStandardMaterial {...materialProps} map={textures[2]} attach="material-4" />
                    <meshStandardMaterial {...materialProps} map={textures[3]} attach="material-5" />
                    <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-0" />
                    <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-1" />
                    <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-2" />
                    <meshStandardMaterial {...materialProps} color="#ffffff" attach="material-3" />
                </mesh>
            </group>
        </group>
    );
}
