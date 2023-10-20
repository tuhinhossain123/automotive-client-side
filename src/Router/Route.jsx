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
import Update from "./../Pages/Update/Update";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://automotive-server-side-9ny4k41pm-tuhin.vercel.app/brands"
          ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://automotive-server-side-9ny4k41pm-tuhin.vercel.app/product"
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brand/:name",
        element: <Brands></Brands>,
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-side-9ny4k41pm-tuhin.vercel.app/product/${params.name}`
          ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-side-9ny4k41pm-tuhin.vercel.app/product/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-side-9ny4k41pm-tuhin.vercel.app/product/details/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
