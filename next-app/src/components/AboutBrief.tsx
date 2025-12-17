'use client';

import { useEffect } from 'react';

export default function AboutBrief() {
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
        <section className="about-brief-section-clean">
            <div className="about-brief-container-clean">
                <div className="fade-in about-brief-content-clean">
                    <span className="about-brief-label-clean">Welcome</span>
                    <h2 className="about-brief-title-clean">Spa Rituals</h2>
                    <p className="about-brief-text-clean">
                        A haven of tranquility where time slows down and self-care becomes sacred.
                        We honor the ancient art of wellness through personalized treatments that nurture body, mind, and spirit.
                    </p>
                    <div className="about-brief-stats-clean">
                        <div className="stat-item-clean">
                            <span className="stat-number-clean">10+</span>
                            <span className="stat-label-clean">Years</span>
                        </div>
                        <div className="stat-divider-clean"></div>
                        <div className="stat-item-clean">
                            <span className="stat-number-clean">5000+</span>
                            <span className="stat-label-clean">Happy Clients</span>
                        </div>
                        <div className="stat-divider-clean"></div>
                        <div className="stat-item-clean">
                            <span className="stat-number-clean">50+</span>
                            <span className="stat-label-clean">Treatments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
