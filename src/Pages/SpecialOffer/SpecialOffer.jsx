const SpecialOffer = () => {
  return (
    <div className="mb-16 mt-20">
      <h2 className="text-5xl text-center font-mono">Special Offers</h2>
      <div className="lg:flex items-center rounded p-8 bg-black mt-5 mx-10">
        <div>
          <img
            src="https://i.ibb.co/nCKQb7h/special.jpg"
            alt=""
            className="w-[500px] h-[200px] mx-auto rounded-lg shadow-2xl my-6"
            data-aos="zoom-out-right"
          />
        </div>
        <div className="lg:w-3/5 pl-8">
          <h2 className="text-2xl text-red-500 font-semibold mb-2">2 Years Free Guaranty For Buying Cars</h2>
          <p className="text-gray-500 font-medium mb-4">
            A limited-time car special offer provides significant discounts or
            incentives on the purchase or lease of a new or used vehicle. These
            offers often include reduced interest rates, cashback deals, lower
            down payments, or complimentary add-ons like extended warranties,
            maintenance packages, or accessories. They are a great way for
            buyers to save money and get extra value when buying a car.
          </p>
          <button className="btn border-none text-white bg-red-500">
              Buy Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
