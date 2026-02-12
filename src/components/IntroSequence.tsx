'use client';

import React, { useEffect, useRef, useState } from 'react';

const LAST_FRAME = 228; // Sequence is 000 to 228
const TOTAL_FRAMES = 229;
const FRAME_PREFIX = '/images/intro/intro.';
const FRAME_SUFFIX = '.webp';

const pad = (num: number) => num.toString().padStart(3, '0');

export default function IntroSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        const preloadFrames = async () => {
            for (let i = 0; i <= LAST_FRAME; i++) {
                const img = new Image();
                // Ensure the path is absolutely from the root
                img.src = `${FRAME_PREFIX}${pad(i)}${FRAME_SUFFIX}`;
                img.onload = () => {
                    loadedCount++;
                    // Start displaying when we have a good buffer (e.g., 30 frames / 1 second)
                    if (loadedCount === 30) {
                        setIsLoaded(true);
                    }
                };
                img.onerror = () => {
                    if (i === 0) console.error("Could not load intro animation frame 0 at:", img.src);
                };
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        preloadFrames();
    }, []);

    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        let frameId: number;
        let startTime = Date.now();
        const fps = 30;

        const render = () => {
            const now = Date.now();
            const elapsed = now - startTime;

            // Calculate current frame, capped at the last frame
            const currentFrameIndex = Math.floor((elapsed / 1000) * fps);
            const displayFrame = Math.min(currentFrameIndex, LAST_FRAME);

            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            const img = images[displayFrame];

            if (canvas && ctx && img && img.complete) {
                // Resize handling
                if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }

                const canvasAspect = canvas.width / canvas.height;
                const imgAspect = img.width / img.height;
                let drawW, drawH, drawX, drawY;

                if (canvasAspect > imgAspect) {
                    drawW = canvas.width;
                    drawH = canvas.width / imgAspect;
                    drawX = 0;
                    drawY = (canvas.height - drawH) / 2;
                } else {
                    drawW = canvas.height * imgAspect;
                    drawH = canvas.height;
                    drawX = (canvas.width - drawW) / 2;
                    drawY = 0;
                }

                // IMPORTANT: Reset alpha to 1.0 for the background fill
                ctx.globalAlpha = 1.0;
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Opacity ramp logic
                let opacity = 1.0;
                if (displayFrame >= 40 && displayFrame <= 200) {
                    // Linear decrease from 1.0 at 40 to 0.15 at 200
                    opacity = 1.0 - (0.85 * (displayFrame - 40) / 160);
                } else if (displayFrame > 200) {
                    opacity = 0.15;
                }

                ctx.globalAlpha = opacity;
                ctx.drawImage(img, drawX, drawY, drawW, drawH);
            }

            if (currentFrameIndex < LAST_FRAME) {
                frameId = requestAnimationFrame(render);
            }
        };

        frameId = requestAnimationFrame(render);

        return () => cancelAnimationFrame(frameId);
    }, [isLoaded, images]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                aria-hidden="true"
            />
        </div>
    );
}
