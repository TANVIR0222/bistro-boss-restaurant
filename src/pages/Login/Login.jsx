import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
//React Simple Captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContex } from "../../AuthProbider/AuthProbider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocalLogin from "../Shared/SocalLogin/SocalLogin";
// import SocalLogin from "../Shared/SocalLogin/SocalLogin";

const Login = () => {
  const { singIn } = useContext(AuthContex);

  const location = useLocation();
  const navigate = useNavigate();

  

  //
  const from = location.state?.from?.pathname || "/";

  //React Simple Captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
    singIn(email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login success full",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  //React Simple Captcha ---- validate captcha
  const [disable, setDisable] = useState(true);

  const handleVC = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  //

  return (
    <div>
      <Helmet>
        <title>bistro-boss | Login</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:w-1/2 font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2   max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleVC}
                  placeholder="Enter hear captcha"
                  className="input input-bordered"
                  required
                />
                <button className="btn btn-outline mt-5 btn-sm">
                  validate
                </button>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button></button>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                  disabled={disable}
                />
              </div>
              <p>
                {" "}
                <small>
                  {" "}
                  New Here?{" "}
                  <Link className="text-blue-700" to={"/singup"}>
                    {" "}
                    Create an account{" "}
                  </Link>{" "}

                </small>{" "}
              </p>
              {/* google Lonig */}
              {/* <SocalLogin></SocalLogin> */}

            </form>
            <SocalLogin></SocalLogin>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
