import React from "react";

export default function login() {
  return (
    <>
      <div className="h-screen w-screen bg-[url(https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg)] bg-cover text-white  font-bold  flex flex-col justify-center items-center">
        <div className=" h-auto w-auto bg-black bg-opacity-60 border-4 border-white-500 rounded-lg mb-3 p-2">
          <form action="" className="">
            <div className="mb-14  mt-4 text-2xl text-center">
              Welcome to the Form Submission
            </div>
            <div className="text-lg flex flex-col items-center">
              Name:
              <input
                type="text"
                className=" pl-2 h-8 w-80 mb-8 rounded text-sm text-black font-normal  placeholder:text-black"
                placeholder="Enter your name"
              />
              Email:
              <input
                type="text"
                className=" pl-2 h-8 w-80 mb-8 rounded text-sm text-black font-normal  placeholder:text-black"
                placeholder="Enter your email"
                required
              />
              Password:
              <input
                type="text"
                className=" pl-2 h-8 w-80 mb-8 rounded text-sm text-black font-normal placeholder:text-black"
                placeholder="Enter your password"
                required
              />
              <button
                type="submit"
                className="bg-blue-500  hover:bg-white hover:border-blue-500 hover:text-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
