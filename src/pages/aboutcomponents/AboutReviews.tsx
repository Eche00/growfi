
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { aboutReviews } from "../../utils/aboutreviews";

function AboutReviews() {

  return (
    <main className="w-[70%] flex flex-1 items-center justify-between">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
        //   pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {aboutReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="relative sm:max-w-[350px] w-full p-6 rounded-[18px] bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-start">
                
                <div className="flex items-baseline gap-2  w-full">
                    <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-[40px] h-[40px] object-cover rounded-full border-2 border-[#68FCC6] mb-5"
                />

                <h3 className="text-white font-[500] text-[18px] mb-3">
                  {review.name}
                </h3>
                </div>

                <p className="text-gray-300 text-[15px] leading-relaxed">
                  {review.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
  );
}

export default AboutReviews;
