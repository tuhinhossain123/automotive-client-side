import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllBrands = ({ brand }) => {
  return (
    <Link to={`/brand/${brand.brand_name}`} className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={brand.brand_img}
          alt="brand"
          className="rounded-xl w-[368px] h-[245px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-mono">{brand.brand_name}</h2>
       
        </div>
      </Link>
  );
};

export default AllBrands;
