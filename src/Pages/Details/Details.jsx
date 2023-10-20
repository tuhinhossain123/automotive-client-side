import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CardContest } from "../Provider/CardProvider";

const Details = () => {
  const cartContext = useContext(CardContest)
  const details = useLoaderData();
  return (
    <div className="mt-20 mb-16 px-5">
      <div>
        <img src={details.img} alt="" className="w-[600px] h-[300px] mx-auto" />
        <h2 className="md:w-[600px] mx-auto text-2xl mt-4 mb-4 font-semibold">
          {details.description}
        </h2>
        <button onClick={()=>cartContext.addCart(details)} className="btn text-center bg-red-500 text-white lg:ml-[305px]">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
