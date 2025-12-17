'use client';

import { useEffect } from 'react';

export default function WhyUs() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el, i) => {
            // @ts-ignore
            el.style.transitionDelay = `${i * 0.15}s`;
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="why-us-section-stylish">
            <div className="why-us-container-stylish">
                <div className="fade-in why-us-header-stylish">
                    <span className="section-label-stylish">Why Choose Us</span>
                    <h2 className="why-us-title-stylish">The Spa Rituals Difference</h2>
                    <p className="why-us-subtitle-stylish">Experience wellness elevated through expertise, care, and dedication</p>
                </div>

                <div className="why-us-grid-stylish">
                    <div className="fade-in why-us-card-stylish">
                        <div className="card-gradient-bg-stylish gradient-1"></div>
                        <div className="why-us-icon-stylish">
                            <span className="icon-emoji">⭐</span>
                        </div>
                        <h3 className="why-us-card-title-stylish">Expert Therapists</h3>
                        <p className="why-us-card-text-stylish">Certified professionals with years of experience in holistic wellness</p>
                    </div>

                    <div className="fade-in why-us-card-stylish">
                        <div className="card-gradient-bg-stylish gradient-2"></div>
                        <div className="why-us-icon-stylish">
                            <span className="icon-emoji">💎</span>
                        </div>
                        <h3 className="why-us-card-title-stylish">Personalized Care</h3>
                        <p className="why-us-card-text-stylish">Every treatment tailored to your unique needs and wellness goals</p>
                    </div>

                    <div className="fade-in why-us-card-stylish">
                        <div className="card-gradient-bg-stylish gradient-3"></div>
                        <div className="why-us-icon-stylish">
                            <span className="icon-emoji">🌿</span>
                        </div>
                        <h3 className="why-us-card-title-stylish">Natural Products</h3>
                        <p className="why-us-card-text-stylish">Premium organic ingredients sourced from nature's finest offerings</p>
                    </div>

                    <div className="fade-in why-us-card-stylish">
                        <div className="card-gradient-bg-stylish gradient-4"></div>
                        <div className="why-us-icon-stylish">
                            <span className="icon-emoji">🧘‍♀️</span>
                        </div>
                        <h3 className="why-us-card-title-stylish">Serene Ambience</h3>
                        <p className="why-us-card-text-stylish">Thoughtfully designed spaces that promote deep relaxation and peace</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
