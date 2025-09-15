import React, { useEffect } from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./Category";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(Context);
  console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{
          zIndex: 10,
          position: "absolute",
          left: "50%",
          top: "calc(100% - 80px)",
          transform: "translateX(90%)",
          cursor: "pointer",
        }}
      >
        <IoIosArrowDroprightCircle className="arrow " />
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{
          zIndex: 10,
          position: "absolute",
          left: "50%",
          top: "calc(100% - 80px)",
          transform: "translateX(-90px)",
          cursor: "pointer",
        }}
      >
        <IoIosArrowDropleftCircle className="arrow " />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="previous" />,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {data?.slice(90, 99)?.map((val, ind) => {
          return (
            <div
              key={ind}
              className="bg-gradient-to-br from-gray-100 via-white to-gray-200 relative overflow-hidden"
              style={{ position: "relative" }}
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-200 rounded-full"></div>
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-100 rounded-full"></div>
              </div>

              <div className="flex flex-col lg:flex-row gap-10 justify-center items-center h-[600px] px-8 lg:px-16 relative z-10">
                {/* Text Content */}
                <div className="space-y-6 flex-1 max-w-xl text-center lg:text-left">
                  <div className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    Checkout The Best Collection
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                    <span className="text-gray-900">{val.name}</span>
                  </h1>

                  <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                    {val.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <span>Shop Now</span>
                    </button>

                    <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Decorative ring */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-pink-500 rounded-full opacity-30 animate-pulse"></div>

                    {/* Main image container */}
                    <div className="relative bg-white rounded-full p-4 shadow-xl border border-gray-100">
                      <img
                        src={val.image_link}
                        alt={val.name}
                        className="rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover shadow-lg transform hover:scale-105 transition-transform duration-500"
                      />

                      {/* Floating badge */}
                      <div className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full p-3 shadow-lg animate-bounce">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
