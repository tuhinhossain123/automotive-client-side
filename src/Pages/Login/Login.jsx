import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    return (
        <div className="hero " data-aos="zoom-in-left">
        <div className="hero-content flex-col">
          <div className="">
            <h1 className="text-2xl font-bold">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form>
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
                  
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="btn bg-[#02a388] text-white">Login</button>
                  
                </div>
                <div className="mt-4">
                  <button
                   
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