import { url } from "inspector";
import React, { ReactElement } from "react";

const Login: React.FC = (): ReactElement => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-cover bg-no-repeat bg-login px-4">
      <div className="block max-w-lg w-full">
        <div className="flex justify-center">
          <div className=" bg-main-100 rounded-full bg-login-band bg-no-repeat bg-contain w-[150px] h-[150px]"></div>
        </div>
        <div className="block mb-8">
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-md font-medium text-main-300"
          >
            Your Email:
          </label>
          <div className="flex">
            <span className="inline-flex items-center pl-5 pr-4 text-sm bg-main-100 text-gray-300 border border-r-0 border-main-200 rounded-l-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <input
              type="text"
              className="rounded-none rounded-r-full text-gray-300 bg-main-200 border focus:outline-none block flex-1 min-w-0 w-full text-basic border-main-200 px-2.5 py-4 "
              placeholder="Email"
            />
          </div>
        </div>
        <div className="block mb-5">
          <label
            htmlFor="website-admin"
            className="block mb-2 text-basic font-medium text-main-300"
          >
            Password:
          </label>
          <div className="flex">
            <span className="inline-flex items-center pl-5 pr-4 text-sm bg-main-100 text-gray-300 border border-r-0 border-main-200 rounded-l-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="rounded-none rounded-r-full text-gray-300 bg-main-200 border focus:outline-none block flex-1 min-w-0 w-full text-basic border-main-200 px-2.5 py-4 "
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex items-center justify-between px-2 mb-5">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-basic text-main-300">Remember me</span>
          </div>
          <a href="#" className="text-blue-700 font-normal">
            Forgot password?
          </a>
        </div>

        <div className="flex justify-items-center mb-2">
          <button className="bg-main-200 w-full py-3.5 text-gray-300 rounded-full mx-auto hover:bg-main-active-hover transition-all">
            Sign In
          </button>
        </div>
        <div className="px-2">
          Don't have an account yet?{" "}
          <a href="#" className="text-blue-700">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
