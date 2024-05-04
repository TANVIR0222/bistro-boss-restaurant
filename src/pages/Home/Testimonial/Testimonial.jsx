import SectionTitle from "../../../component/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
// import { data } from "autoprefixer";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subheading={"---What Our Clients Say---"}
      ></SectionTitle>
      <Swiper navigation={true} autoplay={true} modules={[ Autoplay ,Navigation]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" flex flex-col items-center my-16 mx-24">
                <h1 className="text-7xl text-black py-4"><FaQuoteLeft ></FaQuoteLeft></h1>
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p className="py-8">{review.details}</p>
                <h2 className="text-2xl text-[#CD9003] ">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
