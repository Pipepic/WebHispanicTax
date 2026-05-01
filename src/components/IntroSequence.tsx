'use client';

import React from 'react';
import Image from 'next/image';

export default function IntroSequence() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
            <div className="relative w-full h-full opacity-[0.15]">
                <Image
                    src="/images/intro/intro.228.webp"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}
