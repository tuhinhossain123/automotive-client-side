import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { singIn, singInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError();

    singIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast("user Create Successfully");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleWithGoogle = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero " data-aos="zoom-in-left">
      <div className="hero-content flex-col">
        <div className="">
          <h1 className="text-2xl font-bold">Please Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-secondary text-white">Login</button>
                <ToastContainer />
              </div>
              <div className="mt-4">
                <button
                  onClick={handleWithGoogle}
                  className="outline-slate-300 mb-4 outline font-semibold btn-sm w-full flex items-center justify-center gap-3"
                >
                  <FcGoogle className="text-xl"></FcGoogle> Continue With Google
                </button>
              </div>
            </form>

            <p>
              New here?{" "}
              <Link
                to="/register"
                className="text-blue-500 font-semibold underline"
              >
                create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
