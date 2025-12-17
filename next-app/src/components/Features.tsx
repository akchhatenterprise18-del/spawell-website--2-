import Link from 'next/link';

export default function Features() {
    return (
        <section id="features" className="features-section">
            <div className="features-wrapper">
                {/* Left Column: Text */}
                <div className="features-intro">
                    <h2>Discover the Art of Rejuvenation</h2>
                    <p>Each ritual is carefully crafted to restore balance, awaken inner energy,
                        and elevate wellness through timeless healing traditions.</p>
                    <Link href="#contact" className="features-button">Contact Us ↗</Link>
                </div>

                {/* Right Column: Feature Grid */}
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🌿</div>
                        <h4>Tranquil Ambience</h4>
                        <p>Our center is designed to provide a peaceful and serene environment.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💆‍♀️</div>
                        <h4>Skilled Therapists</h4>
                        <p>Our team consists of experienced and certified professionals.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🍃</div>
                        <h4>Natural Products</h4>
                        <p>We use only high-quality, natural ingredients in our treatments.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h4>Customized Treatments</h4>
                        <p>Each therapy is tailored to meet your individual needs.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛁</div>
                        <h4>Hygienic Facilities</h4>
                        <p>We maintain the highest standards of spa hygiene.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📅</div>
                        <h4>Easy Online Booking</h4>
                        <p>Schedule your appointment with ease through our user-friendly platform.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
