'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        service: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create WhatsApp message
        const message = `Hello Spawell Wellness!

I would like to book an appointment:

📝 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Preferred Date: ${formData.date}
💆 Service: ${formData.service}
${formData.notes ? `📋 Additional Notes: ${formData.notes}` : ''}

Looking forward to your confirmation!`;

        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/918336915555?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Reset form
        setFormData({
            name: '',
            phone: '',
            date: '',
            service: '',
            notes: ''
        });
    };

    return (
        <section id="contact" className="contact-section-premium">
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
    );
}
