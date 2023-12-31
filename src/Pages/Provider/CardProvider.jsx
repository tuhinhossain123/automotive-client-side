import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";

export const CardContest = createContext();
const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user} = useContext(AuthContext);
console.log(user?.email)
  useEffect(()=>{
    console.log(cart)
    fetch(`https://automotive-server-side-9ny4k41pm-tuhin.vercel.app/cart/${user?.email}`,{
        method: "PUT",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(cart)
    })
  },[user, cart])
  
  useEffect(()=>{
    fetch(`https://automotive-server-side-9ny4k41pm-tuhin.vercel.app/cart/${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setCart(data.product)
        console.log(data)
    })
  },[user])


  const addCart = (product) => {
    const existingProduct = cart.find(({ _id }) => _id === product._id);

    if (existingProduct) {
      return toast("Product is already in cart");
    }

    setCart((prevCart) => [...prevCart, product]);
    toast("Product added to cart");
   
  };

  const removeCart = (productId) => {
    setCart((prevCart) => prevCart.filter(({ _id }) => _id !== productId));
    toast("Product removed from cart");
  };

  const cartInfo = { cart, addCart, removeCart };

  return (
    <CardContest.Provider value={cartInfo}>
        {children}
        </CardContest.Provider>
  );
};

export default CardProvider;
