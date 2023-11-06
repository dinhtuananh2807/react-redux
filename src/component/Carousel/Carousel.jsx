import React, { useState } from "react";
import { Carousel } from "antd";
import TrailerModal from "../TrailerModal/TrailerModal";
import "./carousel.scss";

const contentStyle = {
  margin: 0,
  height: "500px",
  position: "relative",
};

const trailerBanner = [
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/uqJ9u7GSaYM?si=ok8ONEn7cgf51irD"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/L-XhraxUsAs?si=dp-JqX2k5Wi73Zqq"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/Eu9G8nO5-Ug?si=z398pqfTkxlEWp6l"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
];
const BannerCarousel = ({ listBanner }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Content Modal đóng vai trò chứa dữ liệu hiển thị cho Modal

  const [contentModal, setContentModal] = useState("Hello Hồng");

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
      <i className="fa-solid fa-arrow-right"></i>
      </div>
    );
  };

  const SamplePreArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display:"block"}}
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>


      
    );
  };

  return (
    <>
      <Carousel id="banner" afterChange={onChange} arrows={true} nextArrow={<SampleNextArrow/>} prevArrow={<SamplePreArrow/>}>
        {listBanner.map((item, index) => {
          console.log(item);
          //Các slide chiều cao chưa giống nhau nên có khoảng trắng

          return (
            <div key={index}>
              <div style={contentStyle}>
                <img
                  src={item.hinhAnh}
                  className="h-full w-full object-cover"
                  alt=""
                />
                <div
                  onClick={() => {
                    //Mở Modal
                    setIsModalOpen(!isModalOpen);

                    //set dữ liệu cho contentModal dựa trên index của slide đang có
                    setContentModal(trailerBanner[index]);
                  }}
                  className="icon_play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl"
                >
                  <i className="fa-solid fa-circle-play"></i>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <TrailerModal
        isModalOpen={isModalOpen}
        onCancel={() => {
          //phương thức onCancel gọi setState cho giá trị false để ẩn modal
          setIsModalOpen(false);
        }}
        contentModal={contentModal}
      />
    </>
  );
};

export default BannerCarousel;
