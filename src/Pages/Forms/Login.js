import React from "react";
import { Link } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user) {
    console.log(user);
  }
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex lg:h-screen justify-center items-center">
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email",{
                  required:{
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: 'Provide a valid email' 
                  }})}
              />
            <label className="label">
            {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password",{
                  required:{
                    value: true,
                    message: 'Password is required'
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer' 
                  }})}
              />
            <label className="label">
            {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            </label>
            </div>

            <input className="btn w-full max-w-xs btn-outline text-center justify-center btn-accent" type="submit" value="Login" />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-accent btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;