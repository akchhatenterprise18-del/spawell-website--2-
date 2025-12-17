'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Hamburger Toggle */}
            <div
                className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Mobile Navigation Menu */}
            <nav className={`mobile-nav ${mobileMenuOpen ? 'show active' : ''}`}>
                <div className="mobile-nav-header">
                    <Link href="/" className="mobile-logo" onClick={closeMenu}>
                        <img src="/assets/images/logo.svg" alt="Spa Rituals Logo" />
                    </Link>
                </div>
                <ul className="mobile-nav-links">
                    <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="/services" onClick={closeMenu}>Therapies</Link></li>
                    <li><Link href="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
                <div className="mobile-nav-footer">
                    <Link href="#contact" className="mobile-cta-btn" onClick={closeMenu}>
                        Book Now
                    </Link>
                </div>
            </nav>

            {/* Desktop Header */}
            <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
                <nav className="modern-navbar">
                    <Link href="/" className="modern-logo">
                        <img src="/assets/images/logo.svg" alt="Spa Rituals Logo" />
                    </Link>

                    <ul className="modern-nav-links">
                        <li>
                            <Link href="/" className="nav-link">
                                <span>Home</span>
                                <div className="nav-link-underline"></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="nav-link">
                                <span>Therapies</span>
                                <div className="nav-link-underline"></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="nav-link">
                                <span>About</span>
                                <div className="nav-link-underline"></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="nav-link">
                                <span>Contact</span>
                                <div className="nav-link-underline"></div>
                            </Link>
                        </li>
                    </ul>

                    <Link href="#contact" className="modern-nav-btn">
                        <span>Book Now</span>
                        <div className="btn-glow"></div>
                    </Link>
                </nav>
            </header>
        </>
    );
}
