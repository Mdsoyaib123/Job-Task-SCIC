import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser,googleLogin,githubLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginWithGoogle = ()=>{
    googleLogin()
    .then(res=>{
        console.log(res.user);
        navigate('/')
    })
  }

  const loginWithGithub = ()=>{
    githubLogin()
    .then(res=>{
        console.log(res.user);
        navigate('/')
    })
  }
  return (
    <>
      <div className="hidden md:flex justify-between items-baseline fixed z-10 w-full py-3 px-5">
        <div>
        <Link to={'/'}><h1>Logo</h1></Link>
        </div>
        <div className="flex gap-3 items-center ">
          <p>Don't have an account?</p>
          <Link to={'/register'}><button className="py-2 px-4 rounded-lg bg-blue-500 text-white">
            Register
          </button></Link>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 pt-4 md:pt-16">
        <div className="hero-content flex-col  lg:flex-row w-full">
          <div className="card flex-shrink-0 w-full md:w-2/3 max-w-xl  bg-white shadow-lg ">
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Email</span>
                </label> */}
                <h1 className="text-center text-xl md:text-3xl mb-4  font-bold">
                  Welcome back!
                </h1>
                <label className="label ">
                  <span className="label-text font-bold ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input  border border-gray-400 rounded-xl"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text font-bold ">Password</span>
                </label>
                <input
                  type="Password"
                  name="password"
                  placeholder="Enter password"
                  className="input  border border-gray-400 rounded-xl"
                  required
                />

                {/* <label className="label flex justify-end">
                <a href="#" className=" link link-hover">
                  Forgot password?
                </a>
              </label> */}
              </div>
              <div className="form-control mt-2">
                <input
                  className="py-2 bg-blue-500 text-white  rounded-xl"
                  type="submit"
                  value="LOGIN"
                />
              </div>
              <div className="text-center">
                <h3 className="py-2  font-bold">--- Or Login with ---</h3>

                <button onClick={loginWithGoogle} className="btn bg-base-300 w-full mb-3 ">
                  <FcGoogle size={20}></FcGoogle>
                  Login with Google
                </button>
                <button onClick={loginWithGithub} className="btn bg-base-300  w-full ">
                  <IoLogoGithub></IoLogoGithub>
                  Login with Github
                </button>
              </div>
              <p className=" mt-1 font-bold text-center">
                If you Do not have account ?{" "}
                <Link to={"/register"} className="text-black underline ">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
