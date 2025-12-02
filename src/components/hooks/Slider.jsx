import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center">
            <img
              src={src}
              className="
                w-[300px]
                h-[400px]
                object-contain
                rounded-xl
                transition-transform
                duration-300
                hover:scale-150
              "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
