import OurProductCard from './OurProductCard';
import IOurProducts from '../../../types/OurProductsType';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

interface CarouselProps {
  products: IOurProducts[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        2560: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {products.map((product: IOurProducts, i: number) => (
        <SwiperSlide>
          <OurProductCard key={i} products={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
