"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ScrollControls, useScroll } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useTranslations } from "next-intl";
import Brochure from "./Brochure";

function ScrollHandler({ onScroll }: { onScroll: (offset: number) => void }) {
    const scroll = useScroll();
    useFrame(() => {
        onScroll(scroll.offset);
    });
    return null;
}

export default function BrochureScene() {
    const indicatorRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('Brochure');

    const handleScroll = (offset: number) => {
        if (indicatorRef.current) {
            const opacity = Math.max(0, 1 - offset * 20);
            indicatorRef.current.style.opacity = opacity.toString();
            indicatorRef.current.style.visibility = opacity <= 0 ? 'hidden' : 'visible';
        }
    };

    return (
        <div className="h-screen w-full overflow-hidden relative bg-[#333333]">
            <div className="h-full w-full">
                <Canvas
                    key="brochure-canvas"
                    shadows
                    camera={{ position: [0, 0, 8], fov: 35 }}
                    gl={{ alpha: true, antialias: true }}
                    onCreated={({ gl }) => {
                        gl.setClearColor('#333333', 0);
                    }}
                >
                    <ambientLight intensity={0.9} />
                    <hemisphereLight intensity={0.7} groundColor="#000000" />
                    <directionalLight position={[0, 8, 5]} intensity={1} />

                    <Suspense fallback={null}>
                        <ScrollControls pages={4} damping={0.2}>
                            <Brochure />
                            <ScrollHandler onScroll={handleScroll} />
                        </ScrollControls>
                        <Environment preset="city" />
                    </Suspense>
                </Canvas>
            </div>

            <div
                ref={indicatorRef}
                className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white/80 text-[10px] tracking-[0.3em] uppercase pointer-events-none animate-bounce flex flex-col items-center gap-1 transition-opacity duration-300 ease-out"
                style={{ zIndex: 10 }}
            >
                <div className="w-[1px] h-6 bg-gradient-to-t from-white/80 to-transparent mb-1"></div>
                <span className="font-bold">{t('swipe_to_open')}</span>
            </div>
        </div>
    );
}
