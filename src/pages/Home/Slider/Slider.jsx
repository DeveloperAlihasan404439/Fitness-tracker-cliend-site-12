// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
// images improt
import banner1 from "../../../assets/Slider/photo-1476525223214-c31ff100e1ae.avif";
import banner2 from "../../../assets/Slider/photo-1571019613454-1cb2f99b2d8b.avif";
import banner4 from "../../../assets/Slider/p-1571019613531-fbeaeb790845.avif";
import banner56 from "../../../assets/Slider/photo-1.avif";
import banner53 from "../../../assets/Slider/premium_-7c083e1121d6.avif";
import "./Slider.css";
function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper h-[80vh]"
      >
        <SwiperSlide>
          <img src={banner1} className="w-[100%] h-full bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner56} className="w-[100%] h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner53} className="w-[100%] h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} className="w-[100%] h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} className="w-[100%] h-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
