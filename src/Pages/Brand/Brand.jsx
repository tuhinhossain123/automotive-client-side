/* eslint-disable react/prop-types */
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={brand.img} alt="car" className="w-[368px] h-[245px]" />
      </figure>
      <div className="card-body space-y-5 mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl">{brand.brand}</h2>
          <h2 className="card-title text-2xl pt-2 font-semibold">{brand.name}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">${brand.price}</h2>
          <div className="flex items-center gap-2">
            <p className="text-xl">
              <AiOutlineStar></AiOutlineStar>
            </p>
            <h3 className="text-xl">{brand.rating}</h3>
          </div>
        </div>
        <div className="card-actions flex justify-between items-center pt-3">
          <Link to={`/product/${brand._id}`} className="border-2 px-5 py-2 text-lg">Details</Link>
          <Link to={`/update/${brand._id}`} className="border-2 px-5 py-2 text-lg">Update</Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
