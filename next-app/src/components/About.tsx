'use client';

import { useEffect, useRef } from 'react';

export default function About() {
    const imgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        if (imgRef.current) observer.observe(imgRef.current);
        if (textRef.current) observer.observe(textRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-image" ref={imgRef}>
                    <img src="/assets/images/about-spa.jpeg" alt="Spa ambiance" />
                </div>
                <div className="about-text" ref={textRef}>
                    <h2 className="about-heading">About Us</h2>
                    <div className="para-text">
                        <p>
                            At Spa Rituals, we believe that wellness is more than a treatment— it’s an
                            experience. Our philosophy blends ancient Ayurvedic wisdom with modern therapeutic techniques to deliver
                            holistic care that rejuvenates your body, calms your mind, and uplifts your spirit.
                        </p>
                        <p>
                            Our team of certified therapists and wellness experts are passionate about
                            personalizing each session to your needs. Whether you’re seeking a peaceful escape, a revitalizing
                            massage,
                            or a full wellness journey, Spa Rituals offers an atmosphere of calm and compassion where your well-being
                            comes first.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
