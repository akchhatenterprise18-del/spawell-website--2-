'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const heroElements = document.querySelectorAll('.hero-fade-in');
        heroElements.forEach((el, i) => {
            // @ts-ignore
            el.style.transitionDelay = `${i * 0.2}s`;
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero-cinematic" id="home" ref={heroRef}>
            {/* Cinematic Video Background */}
            <div className="hero-video-wrapper">
                <video
                    className="hero-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/hero-poster.jpg"
                >
                    {/* Local video provided by user */}
                    <source src="/assets/images/AZstN-t3glXIW_1yil6FJQ-AZstN-t3sXmVPLqdQ0fSew.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay-dark"></div>
            </div>

            <div className="hero-content-cinematic">
                <div className="hero-fade-in hero-badge-cinematic">
                    <span className="badge-icon-cinematic">✨</span>
                    <span>Premium Wellness Experience</span>
                </div>

                <div className="hero-fade-in">
                    <h1 className="hero-title-cinematic">
                        Where Wellness<br />Meets Tranquility
                    </h1>
                </div>

                <div className="hero-fade-in hero-description-cinematic">
                    <p>
                        Discover a sanctuary of calm where ancient healing traditions<br />
                        blend with modern wellness practices
                    </p>
                </div>

                <div className="hero-fade-in hero-cta-buttons-cinematic">
                    <Link href="#contact" className="hero-cta-primary-cinematic">
                        <span>Book Your Ritual</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href="#services" className="hero-cta-secondary-cinematic">
                        <span>Explore Therapies</span>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator-cinematic">
                <div className="scroll-mouse-white">
                    <div className="scroll-wheel-white"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
}
