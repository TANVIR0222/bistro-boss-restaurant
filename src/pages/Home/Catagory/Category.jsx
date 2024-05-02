import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay'

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../component/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subheading={"From 11.00am to 10.00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
    
        autoCapitalize={true}
        centeredSlides={true}
        autoplay={true}
        pagination={{
          clickable: true,
          autoplay:{
            delay:3000,
          }
        }}
        modules={[ Autoplay ,Pagination]}
        className="mySwiper data-swiper-autoplay mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-3xl text-text-right	  -mt-16 uppercase text-gray-400 ">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-3xl text-text-right	 -mt-16 uppercase text-gray-400 ">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-3xl text-text-right	 -mt-16 uppercase text-gray-400 ">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-3xl text-text-right	 -mt-16 uppercase text-gray-400 ">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-3xl text-text-center  -mt-16 uppercase text-gray-400 ">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
