import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
//React Simple Captcha
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from "../../AuthProbider/AuthProbider";

const Login = () => {

    const {createuser} = useContext(AuthContex);

    //React Simple Captcha
    useEffect(() => {
        loadCaptchaEnginge(6); 

    }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const pass = form.password.value;
    const email = form.email.value;

    createuser(email ,pass) 
    .then((result) => {
        const user = result.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode , errorMessage);
        // ..
      });

  };
    //React Simple Captcha ---- validate captcha
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const handleVC = () =>{
    const value = captchaRef.current.value;
    if(validateCaptcha(value)){
        setDisable(false);
    }else{
        setDisable(true);
    }
  }

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
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
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
                <div className="form-control">
                  <label className="label">
                  <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="Enter hear captcha"
                    className="input input-bordered"
                    required
                  />
                  <button onClick={handleVC} className="btn btn-outline mt-5 btn-sm">validate</button>

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
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
