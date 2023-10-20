import { useContext } from "react";
import { CardContest } from "../Provider/CardProvider";
import MyCart from "../MyCart/MyCart";



const Cart = () => {
  const cartContext = useContext(CardContest);
 
  console.log(cartContext);
  return (
    <div className="grid grid-cols-3 gap-10 px-10 mt-10 mb-16">
      {cartContext.cart?.map((cart) => <MyCart key={cart._id} cart={cart}></MyCart>)}
    </div>
  );
};

export default Cart;
