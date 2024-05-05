import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


    const onSubmit = (data) =>{ 
    console.log(data);
    };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   // const name = form.name.value;
  //   const email = form.email.value;
  //   const pass = form.password.value;
  //   // console.log(name , email ,pass);

  // };
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name" ,{ required: true })}
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
                 {errors.name && <span className="text-red-600">Name is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email" , { required: true } )}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-600">Email Address is required</span>}

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password" , {required:true ,minLength:6 ,maxLength:20, pattern: /^[A-Za-z]+$/i } ) }
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  
                />
                 {errors.password?.type === 'required' && <span className="text-red-600">This field is required</span>}
                 {errors.password?.type === 'minLength' && <span className="text-red-600">Password is must be 6 character</span>}
                 {errors.password?.type === 'pattern' && <span className="text-red-600">Strong password [A-Za-z]+$/i </span>}
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
                  value="Sing Up"
                />
              </div>
              <p> <small> New Here? <Link className="text-blue-700" to={'/login'}> Don't have an account?  </Link> </small> </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
