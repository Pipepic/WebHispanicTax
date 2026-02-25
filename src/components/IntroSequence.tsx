'use client';

import React, { useEffect, useRef, useState } from 'react';

const START_FRAME = 17;
const LAST_FRAME = 228;
const FRAME_PREFIX = '/images/intro/intro.';
const FRAME_SUFFIX = '.webp';

const pad = (num: number) => num.toString().padStart(3, '0');

export default function IntroSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const totalToLoad = LAST_FRAME - START_FRAME + 1;
        const loadedImages: HTMLImageElement[] = [];

        const preloadFrames = async () => {
            for (let i = START_FRAME; i <= LAST_FRAME; i++) {
                const img = new Image();
                img.src = `${FRAME_PREFIX}${pad(i)}${FRAME_SUFFIX}`;
                img.onload = () => {
                    loadedCount++;
                    // Start displaying when we have a good buffer (e.g., 30 frames)
                    if (loadedCount === Math.min(30, totalToLoad)) {
                        setIsLoaded(true);
                    }
                };
                img.onerror = () => {
                    if (i === START_FRAME) console.error(`Could not load intro animation frame ${START_FRAME} at:`, img.src);
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
        const sequenceLength = images.length;

        const render = () => {
            const now = Date.now();
            const elapsed = now - startTime;

            // Calculate current frame index (0-based relative to loaded images)
            const currentFrameIndex = Math.floor((elapsed / 1000) * fps);
            const displayIndex = Math.min(currentFrameIndex, sequenceLength - 1);

            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            const img = images[displayIndex];

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

                ctx.globalAlpha = 1.0;
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Opacity ramp logic - adjusted to be relative to the new sequence
                // Original was 40 to 200 in a 229 frame sequence.
                // We'll keep the relative timing if possible, or adjust to absolute frame numbers if they match visual cues.
                // Let's use absolute frame numbers for consistency if the user just trimmed the start.
                const absoluteFrame = displayIndex + START_FRAME;
                let opacity = 1.0;
                if (absoluteFrame >= 40 && absoluteFrame <= 200) {
                    opacity = 1.0 - (0.85 * (absoluteFrame - 40) / 160);
                } else if (absoluteFrame > 200) {
                    opacity = 0.15;
                }

                ctx.globalAlpha = opacity;
                ctx.drawImage(img, drawX, drawY, drawW, drawH);
            }

            if (currentFrameIndex < sequenceLength - 1) {
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
