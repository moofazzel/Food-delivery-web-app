import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
//import { Pagination, Navigation, Autoplay } from "swiper";
import SlideComponentOne, { SlideComponentTwo } from "./slidercomponent/SlideComponentOne";


const BannerSlider = () => {
    return (
        <div className="">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper "
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <SlideComponentOne />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideComponentTwo />
                </SwiperSlide>



            </Swiper>
        </div>
    )
}

export default BannerSlider