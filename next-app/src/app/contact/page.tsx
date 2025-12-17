'use client';

import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        service: '',
        notes: ''
    });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const message = `Hello Spawell Wellness!

I would like to book an appointment:

📝 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Preferred Date: ${formData.date}
💆 Service: ${formData.service}
${formData.notes ? `📋 Additional Notes: ${formData.notes}` : ''}

Looking forward to your confirmation!`;

        const whatsappUrl = `https://wa.me/918336915555?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setFormData({
            name: '',
            phone: '',
            date: '',
            service: '',
            notes: ''
        });
    };

    return (
        <main className="contact-page-wrapper">
            <Navbar />

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1>Get In Touch</h1>
                    <p>We're here to answer your questions and help you begin your wellness journey</p>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="therapies-marquee">
                <div className="marquee-track">
                    <div className="marquee-content">
                        <span>Thai Dry Therapy</span>
                        <span>•</span>
                        <span>Swedish Therapy</span>
                        <span>•</span>
                        <span>Royal Herbal Compress</span>
                        <span>•</span>
                        <span>Balinese Therapy</span>
                        <span>•</span>
                        <span>Aroma Therapy</span>
                        <span>•</span>
                        <span>Elements Therapy</span>
                        <span>•</span>
                        <span>Deep Tissue Therapy</span>
                        <span>•</span>
                        <span>Lomi Lomi Therapy</span>
                        <span>•</span>
                        <span>Hot Stone Therapy</span>
                        <span>•</span>
                        <span>Couple Massage</span>
                        <span>•</span>
                        <span>Wine Therapy</span>
                        <span>•</span>
                    </div>
                    <div className="marquee-content" aria-hidden="true">
                        <span>Thai Dry Therapy</span>
                        <span>•</span>
                        <span>Swedish Therapy</span>
                        <span>•</span>
                        <span>Royal Herbal Compress</span>
                        <span>•</span>
                        <span>Balinese Therapy</span>
                        <span>•</span>
                        <span>Aroma Therapy</span>
                        <span>•</span>
                        <span>Elements Therapy</span>
                        <span>•</span>
                        <span>Deep Tissue Therapy</span>
                        <span>•</span>
                        <span>Lomi Lomi Therapy</span>
                        <span>•</span>
                        <span>Hot Stone Therapy</span>
                        <span>•</span>
                        <span>Couple Massage</span>
                        <span>•</span>
                        <span>Wine Therapy</span>
                        <span>•</span>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section fade-in-section">
                <div className="contact-container">
                    <div className="contact-header">
                        <h2>Book Your Appointment</h2>
                        <p>Choose your preferred therapy and let us create a personalized wellness experience for you</p>
                    </div>

                    <form className="contact-form-premium" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="date">Preferred Date *</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Select Service *</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="form-select"
                                >
                                    <option value="">Choose a service</option>
                                    <option value="Signature Therapies">Signature Therapies</option>
                                    <option value="Face / Body Massage">Face / Body Massage</option>
                                    <option value="Foot Ritual">Foot Ritual</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="notes">Additional Notes (Optional)</label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Any special requests or preferences..."
                                rows={4}
                                className="form-textarea"
                            />
                        </div>

                        <button type="submit" className="whatsapp-btn">
                            <span className="btn-icon">💬</span>
                            Book Appointment Through WhatsApp
                        </button>
                    </form>
                </div>
            </section>

            {/* Map & Contact Details Section */}
            <section className="contact-info-section fade-in-section">
                <div className="contact-info-container">
                    <div className="map-container">
                        <h3>Visit Us</h3>
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.7!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiTiA3NsKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="400"
                                style={{ border: 0, borderRadius: '16px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="contact-details">
                        <h3>Contact Information</h3>
                        <div className="contact-details-grid">
                            <div className="detail-card">
                                <div className="detail-icon">📞</div>
                                <h4>Phone</h4>
                                <a href="tel:+918336915555">+91 83369 15555</a>
                            </div>

                            <div className="detail-card">
                                <div className="detail-icon">📧</div>
                                <h4>Email</h4>
                                <a href="mailto:info@spawellwellness.com">info@spawellwellness.com</a>
                            </div>

                            <div className="detail-card">
                                <div className="detail-icon">📍</div>
                                <h4>Address</h4>
                                <p>Spawell Wellness Center<br />Chandigarh, India</p>
                            </div>

                            <div className="detail-card">
                                <div className="detail-icon">🕐</div>
                                <h4>Business Hours</h4>
                                <p>Mon - Sun: 10:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
