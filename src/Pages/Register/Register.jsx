import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile,logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    const FormData = { name, email, password, photoUrl };
    console.log(FormData);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photoUrl)
        navigate('/')  
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="hidden md:flex justify-between items-baseline fixed z-10 w-full py-3 px-5">
        <div>
            <Link to={'/'}><h1>Logo</h1></Link>
        </div>
        <div className="flex gap-3 items-center ">
          <p>Already have an account?</p>
         <Link to={'/login'}> <button className="py-2 px-4 rounded-lg bg-blue-500 text-white">Login</button></Link>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 pt-4 md:pt-16">
        <div className="hero-content flex-col  lg:flex-row w-full">
          <div className="card flex-shrink-0 md:w-2/3 max-w-xl  bg-white shadow-lg ">
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
               
                <h1 className="text-center text-xl md:text-3xl mb-4  font-bold">
                  Let's go!
                </h1>
                <label className="label ">
                  <span className="label-text font-bold ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input  border border-gray-400 rounded-xl"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text font-bold ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
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
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text font-bold ">Photo Url</span>
                </label>
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Enter password"
                  className="input  border border-gray-400 rounded-xl"
                />
              </div>
              <div className="form-control mt-2">
                <input
                  className="py-2 cursor-pointer bg-blue-500 text-white  rounded-xl"
                  type="submit"
                  value="LOGIN"
                />
              </div>

              <p className=" mt-1 font-bold text-center">
                Already have an account ?{" "}
                <Link to={"/login"} className="text-black underline ">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
