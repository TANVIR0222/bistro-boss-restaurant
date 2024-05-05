import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from "../../AuthProbider/AuthProbider";
import { Link } from "react-router-dom";

const SingUp = () => {
  const {createuser} = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email, data.password)
    .then(result => {
      const users = result.user;
      console.log(users);
    })

  };



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  {...register("name" ,{ required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && <span className="text-red-600"> Name field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true } )}
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-600">Email field is required</span>}
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input

                  type="password"
                  {...register("password",  { required: true , minLength: 6 , pattern: /^[A-Za-z]+$/i})}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && <p> <span className="text-red-600">This field is required</span></p>}
                {errors.password?.type === 'minLength' && <p><span className="text-red-600">Password must be 6 character</span></p>}
                {errors.password?.type === 'pattern' && <p><span className="text-red-600 text-start">Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</span></p>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p> <small> New Here? <Link className="text-blue-700" to={'/login'}> Don't have an account  </Link> </small> </p>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SingUp;
