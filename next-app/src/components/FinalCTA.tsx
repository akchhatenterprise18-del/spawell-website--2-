'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function FinalCTA() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="final-cta-section-fixed">
            <div className="final-cta-gradient-bg"></div>
            <div className="final-cta-container-fixed">
                <div className="fade-in final-cta-content-fixed">
                    <div className="cta-icon-wrapper-fixed">
                        <span className="cta-icon-emoji-fixed">🌸</span>
                    </div>
                    <h2 className="final-cta-title-fixed">Begin Your Wellness Journey Today</h2>
                    <p className="final-cta-text-fixed">
                        Take the first step towards renewed vitality and inner peace.<br />
                        Your transformation awaits at Spa Rituals.
                    </p>
                    <div className="cta-buttons-group-fixed">
                        <Link href="#contact" className="final-cta-button-fixed primary">
                            <span>Reserve Your Experience</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="/services" className="final-cta-button-fixed secondary">
                            <span>View All Therapies</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
