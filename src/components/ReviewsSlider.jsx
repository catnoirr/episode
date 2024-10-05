import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import '../style/reviewsSlider.css'

const reviews = [
  {
    id: 1,
    name: "Jane Doe",
    review: "Great experience! Love the quality.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    review: "Amazing customer service!",
    rating: 4,
  },
  {
    id: 3,
    name: "Sarah Lee",
    review: "The best place to shop trendy clothes.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mike Johnson",
    review: "Fast shipping and great quality.",
    rating: 5,
  },
];

const ReviewsSlider = () => {
  return (
    <div className="reviews-slider">
      <h2>What Our Customers Are Saying</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }} // Enable pagination
        autoplay={{
          delay: 5000, // Auto slide every 5 seconds
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        modules={[Autoplay, Pagination]} // Include Autoplay and Pagination modules
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="review-slide">
            <div className="review-card">
              <p className="review-text">"{review.review}"</p>
              <h3 className="review-name">- {review.name}</h3>
              <div className="review-rating">{'★'.repeat(review.rating)}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;
