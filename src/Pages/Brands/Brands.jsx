import { useLoaderData, useParams } from "react-router-dom";
import Brand from "../Brand/Brand";

const Brands = () => {
  const brands = useLoaderData();

  const names=  useParams()

  return (
    <>
      {brands.length == 0 ? (
        <p className="text-red-500 text-center text-3xl my-20">No Data Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mb-16 mt-10">
          {brands?.map((brand) => (
            <Brand key={brand._id} brand={brand}></Brand>
          ))}
        </div>
      )}
    </>
  );
};

export default Brands;
