/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../static/banner 1.png";
import banner2 from "../../static/banner 2.png";

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container m-auto max-w-[80%] my-[35px]">
      <Slider {...settings}>
        <div>
          <img
            src={banner1}
            className="carousel-image w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={banner2}
            className="carousel-image w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#FF8C00",
        width: "34px",
        height: "69px",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
};

export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#FF8C00",
        width: "34px",
        height: "69px",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 10,
      }}
      onClick={onClick}
    ></div>
  );
};
