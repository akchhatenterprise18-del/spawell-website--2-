'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Nilanjan Roy",
        title: "Local Guide·70 reviews·23 photos",
        text: "“I was here about a week ago. Had a fantastic experience here.Unlike most of the spas in Kolkata, which deal mostly in shady activities, this is one spa where you will get the treatment you require and deserve.The lady at the front desk was attentive to my requirement.The room was clean, quiet and serene.Hygiene was taken care of very well.The therapist was very well trained and professional and did a very nice job. Highly recommended.”",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        name: "Jessica Sarkar",
        title: "5-star review · Google",
        text: "“I had a fantastic experience experience at Spa Rituals the ambience was relaxing clean & very professional. A special shoutout to Farah who was incredibly skilled & attentive throughout the session. They made me feel completely at ease”",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        name: "Heeba Haque",
        title: "5-star review · Google",
        text: "“I was blown away by the exceptional service. From the moment i walked in ,i felt welcome and relaxed. The therapy was amazing as well as the therapist. I took body polishing and my skin as never looked and felt better. I wanna visit every month.”",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        name: "Kanyaphut Khwanmongkol",
        title: "5-star review · Google",
        text: "“Spa Rituals exceeded my expectations. The staff were attentive and knowledgeable and the spa was so clean and hygienic. I loved the deep tissue massage .”",
        stars: "⭐⭐⭐⭐⭐"
    },
];

export default function Testimonials() {
    return (
        <>
            <section className="offer-banner">
                <img src="/assets/images/offer-flyer.jpg" alt="Weekdays Happy Hour Offer" />
            </section>

            <section id="testimonials" className="testimonial-highlight">
                <div className="testimonial-hero">
                    <h2>Client Testimonials</h2>
                    <p>Real stories. Real rejuvenation.</p>
                </div>

                <div className="testimonial-body">
                    <div className="testimonial-image">
                        <img src="/assets/images/massage-woman.jpg" alt="Spa Experience" />
                    </div>

                    <div className="testimonial-slider">
                        <div className="testimonial-track">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                style={{ width: '100%' }}
                            >
                                {testimonials.map((t, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="testimonial-content">
                                            <h3 className="reviewer-name">{t.name}</h3>
                                            <p className="reviewer-title">{t.title}</p>
                                            <p className="testimonial-text">{t.text}</p>
                                            <div className="testimonial-stars">{t.stars}</div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <p className="swipe-hint">Swipe to see more reviews →</p>
                    </div>
                </div>
            </section>
        </>
    );
}
