'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const therapies = [
    {
        id: 'hot-stone',
        name: 'Hot Stone Therapy',
        shortDesc: 'Deep muscle relaxation with heated volcanic stones',
        fullDesc: 'Experience the ancient healing power of smooth, heated volcanic stones. This therapeutic massage melts away tension, improves circulation, and promotes deep relaxation. The warmth penetrates deep into muscles, releasing chronic stress and restoring balance to your body and mind.',
        idealFor: 'Muscle Tension • Stress Relief • Circulation',
        duration: '60-90 minutes',
        image: '/assets/images/hot-stone-therapy.jpg'
    },
    {
        id: 'couple-massage',
        name: 'Couple Massage',
        shortDesc: 'Shared relaxation journey in a private sanctuary',
        fullDesc: 'Reconnect and unwind together in our intimate couple\'s suite. Two skilled therapists provide synchronized massages tailored to each partner\'s needs. Share this peaceful experience in a romantic setting designed for ultimate comfort and connection.',
        idealFor: 'Couples • Bonding • Shared Wellness',
        duration: '60-90 minutes',
        image: '/assets/images/couple-massage.jpg'
    },
    {
        id: 'wine-therapy',
        name: 'Wine Therapy',
        shortDesc: 'Antioxidant-rich treatment for radiant skin',
        fullDesc: 'Indulge in the luxurious benefits of grape extracts and wine essences. Rich in antioxidants and polyphenols, this unique therapy nourishes your skin, promotes cell renewal, and leaves you with a healthy, radiant glow. A perfect blend of indulgence and wellness.',
        idealFor: 'Skin Rejuvenation • Anti-Aging • Relaxation',
        duration: '75-90 minutes',
        image: '/assets/images/wine-therapy.jpg'
    },
    {
        id: 'four-hands',
        name: 'Four Hands Massage Therapy',
        shortDesc: 'Synchronized harmony by two expert therapists',
        fullDesc: 'Experience the extraordinary sensation of two therapists working in perfect harmony. This choreographed massage creates a deeply immersive experience, doubling the relaxation benefits. The synchronized movements create a meditative state that transcends ordinary massage.',
        idealFor: 'Deep Relaxation • Unique Experience • Stress Relief',
        duration: '60-75 minutes',
        image: '/assets/images/four-hands-therapy.jpg'
    },
    {
        id: 'sports-therapy',
        name: 'Sports Therapy',
        shortDesc: 'Athletic recovery and performance enhancement',
        fullDesc: 'Designed for active individuals and athletes, this therapeutic massage targets muscle recovery, flexibility, and injury prevention. Using specialized techniques, we address muscle fatigue, improve range of motion, and accelerate healing for peak performance.',
        idealFor: 'Athletes • Muscle Recovery • Injury Prevention',
        duration: '60-90 minutes',
        image: '/assets/images/sports-therapy.jpg'
    },
    {
        id: 'crystal-cool',
        name: 'Crystal Cool Therapy',
        shortDesc: 'Healing energy with cooling crystal elements',
        fullDesc: 'Harness the natural healing properties of crystals combined with cooling therapy techniques. This unique treatment balances your energy centers, reduces inflammation, and promotes holistic wellness. The cooling sensation soothes both body and mind.',
        idealFor: 'Energy Balance • Inflammation • Holistic Healing',
        duration: '75-90 minutes',
        image: '/assets/images/crystal-therapy.jpg'
    }
];

const testimonials = [
    {
        name: 'Priya M.',
        text: 'The hot stone therapy melted away months of stress. I felt completely renewed.',
        therapy: 'Hot Stone Therapy'
    },
    {
        name: 'Rahul & Anjali',
        text: 'Our couple massage was the perfect anniversary gift. So peaceful and romantic.',
        therapy: 'Couple Massage'
    },
    {
        name: 'Vikram S.',
        text: 'As an athlete, the sports therapy keeps me performing at my best. Highly recommend.',
        therapy: 'Sports Therapy'
    }
];

const heroImages = [
    '/assets/images/spa-hero-1.jpg',
    '/assets/images/spa-hero-2.jpg',
    '/assets/images/spa-hero-3.jpg',
    '/assets/images/spa-hero-4.jpg'
];

export default function ServicesPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    // Slideshow effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const scrollToTherapy = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="services-page-wrapper">
            <Navbar />

            {/* Hero Section with Slideshow */}
            <section className="sp-hero">
                {/* Background Slideshow */}
                <div className="sp-hero-slideshow">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`sp-hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                </div>

                {/* Overlay */}
                <div className="sp-hero-overlay"></div>

                {/* Content */}
                <div className="sp-hero-content">
                    <h1 className="sp-hero-title">Signature Therapies Crafted for Deep Relaxation</h1>
                    <p className="sp-hero-subtitle">Personalized wellness journeys designed to restore balance and nurture your well-being</p>
                    <Link href="/#contact" className="sp-hero-btn">Book Your Therapy</Link>
                </div>
            </section>

            {/* Services Overview Cards */}
            <section className="sp-overview fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Our Signature Therapies</h2>
                    <div className="sp-cards-grid">
                        {therapies.map((therapy, idx) => (
                            <div key={idx} className="sp-card">
                                <h3>{therapy.name}</h3>
                                <p>{therapy.shortDesc}</p>
                                <button
                                    onClick={() => scrollToTherapy(therapy.id)}
                                    className="sp-card-btn"
                                >
                                    Explore Therapy →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Service Sections */}
            {therapies.map((therapy, idx) => (
                <section
                    key={therapy.id}
                    id={therapy.id}
                    className={`sp-detail fade-in-section ${idx % 2 === 0 ? 'sp-light' : 'sp-dark'}`}
                >
                    <div className="sp-container">
                        <div className={`sp-detail-grid ${idx % 2 === 1 ? 'sp-reverse' : ''}`}>
                            <div className="sp-detail-img">
                                <img src={therapy.image} alt={therapy.name} />
                            </div>
                            <div className="sp-detail-text">
                                <h2>{therapy.name}</h2>
                                <div className="sp-divider"></div>
                                <p className="sp-desc">{therapy.fullDesc}</p>
                                <div className="sp-meta">
                                    <div className="sp-meta-item">
                                        <span className="sp-label">Ideal For:</span>
                                        <span className="sp-value">{therapy.idealFor}</span>
                                    </div>
                                    <div className="sp-meta-item">
                                        <span className="sp-label">Duration:</span>
                                        <span className="sp-value">{therapy.duration}</span>
                                    </div>
                                </div>
                                <Link href="/#contact" className="sp-book-btn">Book This Therapy</Link>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Our Therapies Are Different */}
            <section className="sp-trust fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Why Our Therapies Are Different</h2>
                    <div className="sp-trust-grid">
                        <div className="sp-trust-card">
                            <div className="sp-icon">🎓</div>
                            <h3>Certified Therapists</h3>
                            <p>Experienced professionals trained in traditional and modern techniques</p>
                        </div>
                        <div className="sp-trust-card">
                            <div className="sp-icon">✨</div>
                            <h3>Personalized Approach</h3>
                            <p>Every therapy is customized to your unique needs and preferences</p>
                        </div>
                        <div className="sp-trust-card">
                            <div className="sp-icon">🌿</div>
                            <h3>Premium Materials</h3>
                            <p>Organic oils, natural ingredients, and high-quality therapeutic tools</p>
                        </div>
                        <div className="sp-trust-card">
                            <div className="sp-icon">🕊️</div>
                            <h3>Calm Environment</h3>
                            <p>Peaceful sanctuary designed for complete relaxation and privacy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Expect */}
            <section className="sp-process fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">What to Expect</h2>
                    <p className="sp-process-intro">Your journey to wellness, step by step</p>
                    <div className="sp-steps">
                        <div className="sp-step">
                            <div className="sp-step-num">1</div>
                            <h3>Consultation & Comfort</h3>
                            <p>We discuss your needs, preferences, and any concerns to ensure your comfort</p>
                        </div>
                        <div className="sp-connector"></div>
                        <div className="sp-step">
                            <div className="sp-step-num">2</div>
                            <h3>Customized Selection</h3>
                            <p>Your therapist tailors the treatment to address your specific wellness goals</p>
                        </div>
                        <div className="sp-connector"></div>
                        <div className="sp-step">
                            <div className="sp-step-num">3</div>
                            <h3>Deep Relaxation</h3>
                            <p>Experience your personalized therapy in our tranquil, private treatment rooms</p>
                        </div>
                        <div className="sp-connector"></div>
                        <div className="sp-step">
                            <div className="sp-step-num">4</div>
                            <h3>Post-Therapy Care</h3>
                            <p>Receive guidance on maintaining your wellness and maximizing therapy benefits</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="sp-testimonials fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">What Our Guests Say</h2>
                    <div className="sp-test-grid">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="sp-test-card">
                                <div className="sp-quote">"</div>
                                <p className="sp-test-text">{testimonial.text}</p>
                                <div className="sp-author">
                                    <p className="sp-author-name">{testimonial.name}</p>
                                    <p className="sp-author-therapy">{testimonial.therapy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hygiene & Professional Standards */}
            <section className="sp-hygiene fade-in-section">
                <div className="sp-container">
                    <h2 className="sp-heading">Our Commitment to Excellence</h2>
                    <p className="sp-hygiene-intro">Your safety, comfort, and peace of mind are our top priorities</p>
                    <div className="sp-hygiene-grid">
                        <div className="sp-hygiene-card">
                            <div className="sp-icon">🧼</div>
                            <h3>Sanitized Spaces</h3>
                            <p>All treatment rooms are thoroughly cleaned and sanitized between sessions</p>
                        </div>
                        <div className="sp-hygiene-card">
                            <div className="sp-icon">🛏️</div>
                            <h3>Premium Linens</h3>
                            <p>Fresh, high-quality linens and towels for every guest, every time</p>
                        </div>
                        <div className="sp-hygiene-card">
                            <div className="sp-icon">👨‍⚕️</div>
                            <h3>Professional Standards</h3>
                            <p>Our therapists maintain the highest ethical and professional standards</p>
                        </div>
                        <div className="sp-hygiene-card">
                            <div className="sp-icon">🔒</div>
                            <h3>Privacy & Comfort</h3>
                            <p>Discreet, private treatment rooms designed for your complete comfort</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="sp-cta fade-in-section">
                <div className="sp-cta-content">
                    <h2>Begin Your Journey to Deep Relaxation</h2>
                    <p>Let us guide you to a state of complete wellness and tranquility</p>
                    <Link href="/#contact" className="sp-cta-btn">Book Your Session</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
