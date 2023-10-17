
const Banner = () => {
    return (
      <div className="w-full h-[100vh] mt-5">
        <div
          className="hero w-full min-h-screen opacity-95"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/jfgG8c2/banner-2.jpg)",
          }}
        >
          <div className="hero-content  text-neutral-content"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine">
            <div className="absolute lg:mr-[600px]">
            <h1 className="mb-10 text-5xl font-bold text-white font-mono">
                Welcome to <br /> Vehica Car Dealer
              </h1>
              <button className="btn border-none text-white bg-[#ff6900]">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  