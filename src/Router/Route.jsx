import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Cart from "../Pages/Cart/Cart";
import Brands from "../Pages/Brands/Brands";
import Details from "../Pages/Details/Details";

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
          element: <AddProduct></AddProduct>,
          loader: ()=> fetch('http://localhost:5000/product')
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
        },
        {
          path: '/brand/:name',
          element: <Brands></Brands>,
          loader: ({params})=>fetch(`http://localhost:5000/product/${params.name}`)
        },
        {
          path: '/product/:id',
          element: <Details></Details>,
          loader: ({params})=>fetch(`http://localhost:5000/product/details/${params.id}`)
        },
      ]
    },
  ]);

  export default router;