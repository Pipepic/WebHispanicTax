'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';

export default function Brochure3D() {
    const t = useTranslations('Brochure');
    const locale = useLocale();
    const isEsp = locale === 'es';
    const langMode = isEsp ? 'Esp' : 'Eng';
    
    // Generar prefijo de archivo: BroEsp00001.webp o BroEng00001.webp
    const getImagePath = (num: number) => {
        const prefix = isEsp ? 'Esp' : 'Eng';
        return `/brochure/paginas/${langMode}/Bro${prefix}0000${num}.webp`;
    };

    const brochureUrl = locale === 'es' ? '/brochure/brochure-es.pdf' : '/brochure/brochure-en.pdf';
    const downloadName = locale === 'es' ? 'Hispanic Financial - Catálogo de Servicios 2026.pdf' : 'Hispanic Financial - Service Catalog 2026.pdf';

    const containerRef = useRef<HTMLDivElement>(null);
    const [zoom, setZoom] = useState(1);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setHasScrolled(true);
            } else if (window.scrollY < 20) {
                setHasScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track smooth scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });



    // --- ANIMATIONS MAP ---
    // 0.00 -> 0.10: Closed
    // 0.10 -> 0.35: Open Left Panel (180 -> 0)
    // 0.35 -> 0.45: Pause
    // 0.45 -> 0.70: Open Right Panel (-179.5 -> 0)
    // 0.70 -> 0.75: Pause
    // 0.75 -> 1.00: Global Turn (0 -> -180)
    // 0.85 -> 1.00: Backfold (-35 / +35) para simular estar semicerrado en la mesa

    // Using -179.4 to prevent Z-fighting with the left panel when folded
    const leftRotateYRaw = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.85, 1], [180, 180, 0, 0, 35]);
    const rightRotateYRaw = useTransform(scrollYProgress, [0, 0.45, 0.70, 0.85, 1], [-179.4, -179.4, 0, 0, -35]);
    const globalRotateYRaw = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, -180]);

    // Spring physics for premium mass/inertia feel
    const springConfig = { stiffness: 60, damping: 15, mass: 1 };
    const leftRotateY = useSpring(leftRotateYRaw, springConfig);
    const rightRotateY = useSpring(rightRotateYRaw, springConfig);
    const globalRotateY = useSpring(globalRotateYRaw, springConfig);

    // --- GLARE / REFLECTION PHYSICS ---
    // Moving light reflections based on panel angles simulating specularity
    const p1GlareOpacity = useTransform(leftRotateY, [180, 135, 90], [0, 0.5, 0]);
    const p1GlareX = useTransform(leftRotateY, [180, 90], ["-50%", "50%"]);

    const p2GlareOpacity = useTransform(leftRotateY, [90, 45, 0], [0, 0.4, 0]);
    const p2GlareX = useTransform(leftRotateY, [90, 0], ["50%", "-50%"]);

    const p3GlareOpacity = useTransform(globalRotateY, [0, -45, -90], [0, 0.4, 0]);
    const p3GlareX = useTransform(globalRotateY, [0, -90], ["-50%", "50%"]);

    const p4GlareOpacity = useTransform(rightRotateY, [-90, -45, 0], [0, 0.4, 0]);
    const p4GlareX = useTransform(rightRotateY, [-90, 0], ["-50%", "50%"]);

    const p5GlareOpacity = useTransform(globalRotateY, [-90, -135, -180], [0, 0.4, 0]);
    const p5GlareX = useTransform(globalRotateY, [-90, -180], ["50%", "-50%"]);

    const p6GlareOpacity = useTransform(globalRotateY, [-90, -135, -180], [0, 0.4, 0]);
    const p6GlareX = useTransform(globalRotateY, [-90, -180], ["50%", "-50%"]);

    // Dinámicas de Escala y Posición X para visualización óptima
    // Escala: Inicia en 1.35 (Portada reducida un 10%) -> 1.4 para dos caras -> 1.15 para tres caras
    const dynamicScale = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.45, 0.70], [1.35, 1.35, 1.4, 1.4, 1.15]);
    
    // X (Pan): Para mantener el "centro de gravedad" visual centrado en la pantalla dependiente de caras visibles
    const dynamicX = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.45, 0.70], ["0%", "0%", "50%", "50%", "0%"]);

    // En Framer Motion, la propiedad correcta para la profundidad es 'z', no 'translateZ'.
    // Valores positivos de 'z' mueven el panel hacia el usuario globalmente antes de la rotación.
    const leftZ = useTransform(scrollYProgress, [0, 0.35], [20, 0]);
    const rightZ = useTransform(scrollYProgress, [0, 0.45], [10, 0]);


    const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 2.5));
    const handleZoomOut = () => setZoom(z => Math.max(z - 0.2, 0.5));
    const handleResetZoom = () => setZoom(1);

    return (
        <div ref={containerRef} className="relative w-full h-[400vh] bg-fixed bg-[radial-gradient(circle_at_center,_#b3b3b3_0%,_#333333_100%)]">
            
            {/* Sticky Container for 3D View */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center relative">
                
                {/* Contenedor principal sin animación de entrada */}
                <div
                    className="w-full flex items-center justify-center h-full pointer-events-none relative"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* 3D Scene Wrapper */}
                    <div 
                        className="relative w-full max-w-[1200px] h-[75vh] flex items-center justify-center transition-transform duration-300 pointer-events-none"
                        style={{ perspective: '2000px', transform: `scale(${zoom})` }}
                    >
                        
                        {/* Global Rotation Group - Aspect ratio locked to image proportions (816x1056) */}
                        <motion.div 
                            className="relative h-[65vh] aspect-[816/1056] preserve-3d shadow-2xl"
                            style={{ rotateY: globalRotateY, scale: dynamicScale, x: dynamicX, willChange: 'transform' }}
                        >
                        
                        {/* 1. LAYER: CENTER PANEL */}
                        <div className="absolute inset-0 w-full h-full preserve-3d shadow-2xl">
                            {/* Front (Page 3) */}
                            <div className="absolute inset-0 w-full h-full backface-hidden bg-white overflow-hidden">
                                <Image src={getImagePath(3)} alt="Page 3" fill className="object-fill" priority sizes="(max-width: 768px) 100vw, 50vw" />
                                {/* Dynamic Glare */}
                                <motion.div className="absolute inset-0 pointer-events-none mix-blend-overlay z-20" style={{ opacity: p3GlareOpacity }}>
                                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%] -left-[50%]" style={{ x: p3GlareX }} />
                                </motion.div>
                                {/* Inner Shadow for realism */}
                                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10" />
                                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
                            </div>
                            {/* Back (Page 6) */}
                            <div style={{ transform: 'rotateY(180deg)' }} className="absolute inset-0 w-full h-full backface-hidden bg-white overflow-hidden">
                                <Image src={getImagePath(6)} alt="Page 6" fill className="object-fill" sizes="(max-width: 768px) 100vw, 50vw" />
                                {/* Dynamic Glare */}
                                <motion.div className="absolute inset-0 pointer-events-none mix-blend-overlay z-20" style={{ opacity: p6GlareOpacity }}>
                                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%] -left-[50%]" style={{ x: p6GlareX }} />
                                </motion.div>
                            </div>
                        </div>

                        {/* 2. LAYER: RIGHT PANEL (Rendered before Left so it stays underneath when closed) */}
                        <motion.div 
                            className="absolute top-0 left-full w-full h-full origin-left preserve-3d shadow-[-10px_0_30px_rgba(0,0,0,0.3)]"
                            style={{ rotateY: rightRotateY, z: rightZ, willChange: 'transform' }}
                        >
                            {/* Front (Page 4) */}
                            <div className="absolute inset-0 w-full h-full backface-hidden bg-white overflow-hidden">
                                <Image src={getImagePath(4)} alt="Page 4" fill className="object-fill" sizes="(max-width: 768px) 100vw, 50vw" />
                                {/* Dynamic Glare */}
                                <motion.div className="absolute inset-0 pointer-events-none mix-blend-overlay z-20" style={{ opacity: p4GlareOpacity }}>
                                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%] -left-[50%]" style={{ x: p4GlareX }} />
                                </motion.div>
                                {/* Shadow coming from the center crease */}
                                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/30 to-transparent pointer-events-none z-10" />
                            </div>
                            {/* Back (Page 5) */}
                            <div style={{ transform: 'rotateY(180deg)' }} className="absolute inset-0 w-full h-full backface-hidden bg-white overflow-hidden">
                                <Image src={getImagePath(5)} alt="Page 5" fill className="object-fill" sizes="(max-width: 768px) 100vw, 50vw" />
                                {/* Dynamic Glare */}
                                <motion.div className="absolute inset-0 pointer-events-none mix-blend-overlay z-20" style={{ opacity: p5GlareOpacity }}>
                                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%] -left-[50%]" style={{ x: p5GlareX }} />
                                </motion.div>
                                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-10" />
                            </div>
                        </motion.div>

                        {/* 3. LAYER: LEFT PANEL (Rendered last so it sits on top when closed) */}
                        <motion.div 
                            className="absolute top-0 right-full w-full h-full origin-right preserve-3d shadow-[10px_0_30px_rgba(0,0,0,0.3)]"
                            style={{ rotateY: leftRotateY, z: leftZ, willChange: 'transform' }}
                        >
                            {/* Front (Page 2) */}
                            <div className="absolute inset-0 w-full h-full backface-hidden bg-white overflow-hidden">
                                <Image src={getImagePath(2)} alt="Page 2" fill className="object-fill" priority sizes="(max-width: 768px) 100vw, 50vw" />
                                {/* Dynamic Glare */}
                                <motion.div className="absolute inset-0 pointer-events-none mix-blend-overlay z-20" style={{ opacity: p2GlareOpacity }}>
                                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%] -left-[50%]" style={{ x: p2GlareX }} />
                                </motion.div>
                                {/* Shadow coming from the center crease */}
                                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/30 to-transparent pointer-events-none z-10" />
                            </div>
                            {/* Back (Page 1 - Cover) */}
                            <div style={{ transform: 'rotateY(180deg)' }} className="absolute inset-0 w-full h-full backface-hidden bg-white overflow-hidden">
                                <Image src={getImagePath(1)} alt="Page 1" fill className="object-fill" priority sizes="(max-width: 768px) 100vw, 50vw" />
                                {/* Dynamic Glare */}
                                <motion.div className="absolute inset-0 pointer-events-none mix-blend-overlay z-20" style={{ opacity: p1GlareOpacity }}>
                                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%] -left-[50%]" style={{ x: p1GlareX }} />
                                </motion.div>
                                {/* Ambient edge dark */}
                                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10" />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
                
                {/* Scroll Indicator helper text */}
                <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ 
                        opacity: hasScrolled ? 0 : [0.4, 1, 0.4] 
                    }}
                    transition={{ 
                        opacity: hasScrolled 
                            ? { duration: 0.8 } 
                            : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-[20%] left-1/2 -translate-x-1/2 text-white/50 text-[11px] tracking-[0.3em] uppercase font-bold pointer-events-none"
                >
                    Scroll para Abrir
                </motion.div>

                {/* Zoom Controls UI */}
                <div className="absolute bottom-10 right-10 flex gap-2 bg-black/40 backdrop-blur-lg p-2 rounded-full border border-white/10 shadow-xl pointer-events-auto">
                    <button 
                        onClick={handleZoomOut}
                        className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition-colors"
                        title="Zoom Out"
                    >
                        <ZoomOut className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={handleResetZoom}
                        className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition-colors"
                        title="Reset Zoom"
                    >
                        <RotateCcw className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={handleZoomIn}
                        className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition-colors"
                        title="Zoom In"
                    >
                        <ZoomIn className="w-5 h-5" />
                    </button>

                    <div className="w-[1px] h-6 bg-white/20 mx-1" />

                    <a 
                        href={brochureUrl}
                        download={downloadName}
                        className="flex items-center gap-2 px-4 h-10 rounded-full bg-brand-gold text-brand-dark font-bold text-[11px] tracking-wider uppercase hover:scale-105 transition-transform"
                        title="Download PDF"
                    >
                        <Download className="w-4 h-4" />
                        {t('button')}
                    </a>
                </div>

            </div>
            
            {/* Additional helper styles for globals.css if needed, but handled by Tailwind */}
            <style jsx global>{`
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
            `}</style>
        </div>
    );
}
