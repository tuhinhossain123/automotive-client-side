const Slider = ({ slider }) => {
  const {slider_img1, slider_img2, slider_img3}=slider;

  return (
    <>
      {/* // <div className=" w-[90%] mx-auto line"> */}
      <div className="carousel  w-full">
        <div id="slide1" className="carousel-item relative h-[450px] w-full ">
          <img src={slider_img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative h-[450px] w-full  ">
          <img src={slider_img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              {" "}
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              {" "}
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative h-[450px] w-full ">
          <img src={slider_img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/*    </div>  */}
    </>
  );
};

export default Slider;
