import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/brands')
        },
        {
          path: '/addProduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;