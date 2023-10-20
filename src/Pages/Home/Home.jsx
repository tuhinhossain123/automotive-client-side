import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import AllBrands from "../AllBrands/AllBrands";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import OurProcess from "../OurProcess/OurProcess";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      <div className="mt-14 mb-10">
        <h2 className="text-5xl text-center font-mono dark:text-white">Our Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-5">
          {brands?.map((brand) => (
            <AllBrands key={brand._id} brand={brand}></AllBrands>
          ))}
        </div>
      </div>
      <SpecialOffer></SpecialOffer>
      <OurProcess></OurProcess>
    </div>
  );
};

export default Home;
