'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const animatedElements = document.querySelectorAll('.fade-in-section');
        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Navbar />
            <div className="about-page">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="about-hero-overlay">
                        <h1 className="about-hero-title">About Spawell Wellness</h1>
                        <p className="about-hero-subtitle">Where Ancient Wisdom Meets Modern Wellness</p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="about-story fade-in-section">
                    <div className="about-container">
                        <div className="story-content">
                            <div className="story-image">
                                <img src="/assets/images/about-spa.jpeg" alt="Spa Interior" />
                            </div>
                            <div className="story-text">
                                <h2>Our Story</h2>
                                <div className="decorative-line"></div>
                                <p>
                                    Founded with a vision to create a sanctuary where traditional Ayurvedic practices
                                    harmonize with contemporary therapeutic techniques, Spawell Wellness was born from
                                    a passion for holistic healing.
                                </p>
                                <p>
                                    Our founders sought to establish a space where every guest could experience true
                                    rejuvenation of body, mind, and spirit. Today, we continue this legacy by offering
                                    personalized wellness journeys that honor ancient traditions while embracing modern
                                    innovations in spa therapy.
                                </p>
                                <p>
                                    At Spawell, we believe that wellness is not a destination but a journey—one that
                                    we are honored to share with you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="mission-vision fade-in-section">
                    <div className="about-container">
                        <div className="mv-grid">
                            <div className="mv-card mission-card">
                                <div className="mv-icon">🪷</div>
                                <h3>Our Mission</h3>
                                <p>
                                    To provide transformative wellness experiences that nurture the whole person
                                    through personalized care, ancient wisdom, and modern expertise.
                                </p>
                            </div>
                            <div className="mv-card vision-card">
                                <div className="mv-icon">🧭</div>
                                <h3>Our Vision</h3>
                                <p>
                                    To be the premier destination for holistic wellness, inspiring our community
                                    to embrace balanced, mindful living.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="core-values fade-in-section">
                    <div className="about-container">
                        <h2 className="section-heading">Our Core Values</h2>
                        <div className="values-grid">
                            <div className="value-card">
                                <div className="value-icon">⭐</div>
                                <h3>Excellence</h3>
                                <p>We maintain the highest standards in every treatment, ensuring exceptional quality and results.</p>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">🌿</div>
                                <h3>Authenticity</h3>
                                <p>Genuine care rooted in traditional practices, delivered with heartfelt compassion.</p>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">☯️</div>
                                <h3>Holistic Care</h3>
                                <p>Treating the whole person—body, mind, and spirit—for complete wellness.</p>
                            </div>
                            <div className="value-card">
                                <div className="value-icon">🌍</div>
                                <h3>Sustainability</h3>
                                <p>Eco-friendly practices and natural products that honor our planet and your health.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="team-section fade-in-section">
                    <div className="about-container">
                        <h2 className="section-heading">Meet Our Expert Team</h2>
                        <p className="team-intro">
                            Our certified therapists and wellness experts are passionate about your journey to wellness.
                        </p>
                        <div className="team-grid">
                            <div className="team-card">
                                <div className="team-image">
                                    <img src="/assets/images/team-1.jpg" alt="Dr. Priya Sharma" />
                                </div>
                                <div className="team-info">
                                    <h3>Dr. Priya Sharma</h3>
                                    <p className="team-title">Lead Ayurvedic Therapist</p>
                                    <p className="team-bio">
                                        With over 15 years of experience in Ayurvedic medicine, Dr. Sharma brings
                                        ancient healing wisdom to modern wellness.
                                    </p>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-image">
                                    <img src="/assets/images/team-2.jpg" alt="Maya Patel" />
                                </div>
                                <div className="team-info">
                                    <h3>Maya Patel</h3>
                                    <p className="team-title">Senior Massage Therapist</p>
                                    <p className="team-bio">
                                        Specializing in deep tissue and Swedish massage, Maya creates personalized
                                        treatments for optimal relaxation.
                                    </p>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-image">
                                    <img src="/assets/images/team-3.jpg" alt="Arjun Mehta" />
                                </div>
                                <div className="team-info">
                                    <h3>Arjun Mehta</h3>
                                    <p className="team-title">Wellness Consultant</p>
                                    <p className="team-bio">
                                        Arjun guides clients on their wellness journey with customized programs
                                        combining nutrition, lifestyle, and therapy.
                                    </p>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-image">
                                    <img src="/assets/images/team-4.jpg" alt="Anjali Reddy" />
                                </div>
                                <div className="team-info">
                                    <h3>Anjali Reddy</h3>
                                    <p className="team-title">Skincare Specialist</p>
                                    <p className="team-bio">
                                        Expert in natural skincare and facial treatments, Anjali helps clients
                                        achieve radiant, healthy skin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="about-cta fade-in-section">
                    <div className="about-container">
                        <h2>Begin Your Wellness Journey</h2>
                        <p>Experience the transformative power of holistic wellness at Spawell.</p>
                        <Link href="/#contact" className="cta-button">Book An Appointment</Link>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
