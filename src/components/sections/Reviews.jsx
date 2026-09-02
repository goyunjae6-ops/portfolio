import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviews } from "../../data/content";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <section className="rounded-t-[60px] bg-mist px-4 py-16 sm:px-8 lg:px-[18px]">
      <div className="mx-auto max-w-[1884px]">
        <h2 className="pb-8 text-2xl text-ink sm:pb-14 sm:text-[25px]">Reviews</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="review-swiper pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.author}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
