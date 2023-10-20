/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { CardContest } from "../Provider/CardProvider";


const MyCart = ({cart}) => {
    const cartContext = useContext(CardContest);
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={cart.img} alt="car" className="w-[368px] h-[245px]" />
            </figure>
            <div className="card-body space-y-5 mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl">{cart.brand}</h2>
                <h2 className="card-title text-2xl pt-2 font-semibold">
                  {cart.name}
                </h2>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">${cart.price}</h2>
                <div className="flex items-center gap-2">
                  <p className="text-xl">
                    <AiOutlineStar></AiOutlineStar>
                  </p>
                  <h3 className="text-xl">{cart.rating}</h3>
                </div>
              </div>
              <button
                 onClick={()=>cartContext.removeCart(cart._id)}
                className="border-2 px-5 py-2 text-lg"
              >
                Remove
              </button>
            </div>
          </div>
    );
};

export default MyCart;