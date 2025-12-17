'use client';

import { useEffect } from 'react';

export default function Experience() {
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
        <section className="experience-section-fixed">
            <div className="experience-container-fixed">
                <div className="experience-content-fixed">
                    <div className="fade-in experience-image-fixed">
                        {/* User provided image */}
                        <img
                            src="/assets/images/no a more related spa image like candels towel massge going on stones.jpg"
                            alt="The Spa Experience"
                            className="experience-img-fixed"
                        />
                    </div>
                    <div className="fade-in experience-text-fixed">
                        <span className="section-label-fixed">The Experience</span>
                        <h2 className="experience-title-fixed">A Sanctuary of Serenity</h2>
                        <p className="experience-description-fixed">
                            Step into a world designed for your complete renewal. Every detail, from ambient lighting
                            to soothing aromatherapy, creates an atmosphere of pure serenity. Our thoughtfully curated
                            spaces invite you to disconnect from the outside world and reconnect with your inner peace.
                        </p>
                        <div className="experience-features-fixed">
                            <div className="feature-item-fixed">
                                <span className="feature-icon-fixed">🕯️</span>
                                <span>Ambient Lighting</span>
                            </div>
                            <div className="feature-item-fixed">
                                <span className="feature-icon-fixed">🎵</span>
                                <span>Soothing Music</span>
                            </div>
                            <div className="feature-item-fixed">
                                <span className="feature-icon-fixed">🌺</span>
                                <span>Aromatherapy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
