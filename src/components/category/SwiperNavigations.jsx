import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import { useSwiper } from "swiper/react"

const SwiperNavigations = () => {
    const swiper = useSwiper()
  return (
    <div className="flex justify-end items-center gap-5">
      <FaArrowCircleLeft size={40} color="#8BAC3E" className="cursor-pointer" onClick={() => swiper.slidePrev()} />
      <FaArrowCircleRight size={40} color="#8BAC3E" className="cursor-pointer" onClick={() => swiper.slideNext()}/>
  </div>
  )
}

export default SwiperNavigations