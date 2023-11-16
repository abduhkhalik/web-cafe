import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Category.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Category = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full text-3xl font-bold">
            <p className=" mb-3">Browser Our Category</p>
            <p className="text-darkGreenA">Receipt</p>
          </div>
          <div className="w-full flex justify-center items-center gap[10px]">
            <Swiper
              slidesPerView={3}
              spaceBetween={5}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
