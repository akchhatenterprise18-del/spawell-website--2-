'use client';

import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
    { src: "/assets/images/ambiance3.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/ambiance4.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/ambiance5.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/ambiance6.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/ambiance7.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/ambiance8.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/ambiance9.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/ambiance10.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/gallery4.jpg", category: "ambiance", title: "Aromatherapy setup" },
    { src: "/assets/images/gallery5.jpg", category: "facial", title: "Facial treatment" },
    { src: "/assets/images/ambiance1.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/ambiance2.JPG", category: "ambiance", title: "Zen garden view" },
    { src: "/assets/images/massage1.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage2.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage3.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage4.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage5.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage6.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage7.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage8.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage10.jpg", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage11.jpg", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage12.jpg", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage13.jpg", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/massage9.JPG", category: "massage", title: "Massage Therapy" },
    { src: "/assets/images/ambiance11.JPG", category: "ambiance", title: "Zen garden view" },
];

export default function Gallery() {
    const [filter, setFilter] = useState('all');
    const [index, setIndex] = useState(-1);

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    // We need to map global indices to the filtered list for the lightbox if we want to show only filtered images in lightbox.
    // Or just show all images in lightbox. Usually better to show what's visible.

    const slides = filteredImages.map(img => ({ src: img.src, title: img.title }));

    return (
        <section id="gallery" className="gallery-section">
            <h2>Our Gallery</h2>
            <div className="gallery-filters">
                {['all', 'massage', 'facial', 'ambiance'].map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredImages.map((img, i) => (
                    <div
                        key={i}
                        className="gallery-item visible" // Default visible for now, or add animation logic
                        onClick={() => setIndex(i)}
                        style={{ cursor: 'pointer' }}
                    >
                        {/* Using img tag directly to match CSS or simple div wrapper */}
                        {/* Removed <a> tag which might cause layout issues if not styled */}
                        <img src={img.src} alt={img.title} />
                    </div>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
            />
        </section>
    );
}
