import Salad from "../../assets/img/Image.png";
import { FaStar } from "react-icons/fa";
import "./Jumbotron.css";
import { useState } from "react";

const Jumbotron = () => {
  const [rating, setRating] = useState(null);
  const [rateColor, setRateColor] = useState(null);
  return (
    <section className="hero">
      <div className="overlay">
        <div className="container">
          <div className="flex justify-center gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <div className="text-darkGreenA lg:text-6xl text-3xl font-semibold">
                <p>Good Food Us</p>
                <p>Good Mood</p>
              </div>
              <div className="w-full my-3 lg:hidden py-12">
                <img className="w-[200px]" src={Salad} alt="..." />
                <div className="bg-transparent z-10 w-[300px] shadow-xl absolute right-0 rounded-xl backdrop-blur-sm px-4 py-4 -mt-10">
                  <div className="flex gap-5">
                    <img className="w-[70px]" src={Salad} alt="" />
                    <div className="w-full flex flex-col">
                      <div className="">
                        <p>Green Salad Tomato</p>
                        <p>Tomato</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((star, index) => {
                          const currentRate = index++;
                          return (
                            <div key={index}>
                              <label>
                                <input
                                  className="hidden"
                                  type="radio"
                                  name="rate"
                                  value={currentRate}
                                  onClick={() => setRating(currentRate)}
                                />
                                <FaStar
                                  size={20}
                                  color={
                                    currentRate <= (rateColor || rating)
                                      ? "#FF8412"
                                      : "#C9C9C9"
                                  }
                                />
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-500 lg:my-10 my-5 relative lg:pr-[12rem] pr-0">
                <p>
                  I would think that conserving our natural resources should be
                  a conservative position: Not to waste food, and not to throw
                  away a lot of the food that we buy.
                </p>
              </div>
              <div className="flex gap-10">
                <button className="daftar_btn">Daftar Sekarang</button>
                <button className="px-4 py-2 rounded-[100px] bg-[#F2F2F2]">
                  About Us
                </button>
              </div>
            </div>
            <div className="w-full hidden lg:block lg:w-1/2">
              <img src={Salad} alt="" />
              <div className="bg-transparent z-10 w-[370px] shadow-xl rounded-xl backdrop-blur-md px-4 py-4 -mt-10">
                <div className="flex gap-5">
                  <img className="w-[70px]" src={Salad} alt="" />
                  <div className="w-full flex flex-col">
                    <div className="">
                      <p>Green Salad Tomato</p>
                      <p>Tomato</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((star, index) => {
                        const currentRate = index++;
                        return (
                          <div key={index}>
                            <label>
                              <input
                                className="hidden"
                                type="radio"
                                name="rate"
                                value={currentRate}
                                onClick={() => setRating(currentRate)}
                              />
                              <FaStar
                                size={20}
                                color={
                                  currentRate <= (rateColor || rating)
                                    ? "#FF8412"
                                    : "#C9C9C9"
                                }
                              />
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
