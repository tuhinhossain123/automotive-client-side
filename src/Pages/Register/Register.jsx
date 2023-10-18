import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero ">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">img url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="img url"
                    name="text"
                    className="input input-bordered"
                  />
                </div>
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
                  <button className="btn bg-[#02a388] text-white">
                    Register
                  </button>
                  
                </div>
              </form>
              <p>
                Already have an account please?{" "}
                <Link
                  to="/login"
                  className="text-blue-500 font-semibold underline"
                >
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;