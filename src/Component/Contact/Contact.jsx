import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-base-200 w-full  text-black px-3 xl:px-0"
    >
      <Toaster></Toaster>
      <div className="max-w-6xl mx-auto">
        {/* <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-center pt-4 text-gray-900 ">
          Contact
        </h1> */}
        <div className=" flex justify-center gap-12 items-center  py-16 px- md:px-0">
          <div className="w-1/2 hidden md:flex flex-col flex-1  space-y-4">
            {/* <img src="https://i.ibb.co/x634G39/843ba4-bd3021bc6649414fa9451b5029146550-mv2.gif" alt="" /> */}
           <div className="">
           <h1 className="text-2xl  md:text-3xl lg:text-5xl">Talk with our <br></br> sales team</h1>
            <p className="md:text-xl lg:text-2xl py-5">Fill out your information and an Asana representative will reach out to you. Have a simple question? Check out our FAQ.</p>
            <NavHashLink to={'/#faq'}><button className="underline text-2xl ">Check out our FAQ</button></NavHashLink>
           </div>
          </div>
          <div className="w-1/2 flex-1">
            <h1 className="text-xl md:text-2xl lg:text-4xl pb-6 font-semibold">Contact our team</h1>
            <form  className="space-y-5">
              <div>
                <label className="text-gray-900 ">Your Name</label>
                <input
                  className="w-full py-2 px-4 rounded"
                  placeholder="Your name"
                  type="text"
                  name="name"
                />
              </div>
              <div>
                <label className=" text-gray-900">Your Email</label>
                <input
                  className="w-full py-2 px-4 rounded"
                  placeholder="Your email"
                  type="email"
                  name="email"
                />
              </div>
              <div>
                <label className="text-gray-900">Message</label>
                <textarea
                  className="w-full px-4 rounded py-2"
                  placeholder="Your message"
                  name="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <input
                className="w-full py-3 rounded text-white bg-blue-600 cursor-pointer"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
