import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

function Reviews() {
  const sponsors = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/019/909/676/non_2x/paypal-transparent-paypal-free-free-png.png",
     
    },
    {
      img: "https://cdn.freebiesupply.com/images/large/2x/stripe-logo-black-transparent.png",
     
    },
    {
      img: "https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png",
     
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
     
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flutterwave_Logo.png",
      
    },
    {
      img: "https://cdn.prod.website-files.com/5f86aca9f12c3455f05577c3/623f5b5f52627652b4cfcce5_tradingview-logo-vector-p-500.png",
      
    },
    {
      img: "https://logos-world.net/wp-content/uploads/2023/01/MetaMask-Logo-2016.png",
     
    },
    {
      img: "https://download.logo.wine/logo/Coinbase/Coinbase-Logo.wine.png",
      
    },
  ];
  

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto flex flex-col">
      {/* Swiper Slider */}
      <main className="w-full flex flex-1 items-center justify-center ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop
          // pagination={{ clickable: true }}
          // navigation
          autoplay={{ delay: 2000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {sponsors.map((review, index) => (
            <SwiperSlide key={index}>
              <div className=" relative sm:max-w-[350px] w-full p-5  rounded-[18px]   bg-white/10">
                <img
                  src={review.img}
                  alt={review.img}
                  className="w-[70%] h-[150px] object-contain rounded-[10px] mx-auto"
                />
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}

export default Reviews;
