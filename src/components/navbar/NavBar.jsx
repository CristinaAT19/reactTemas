import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className=" w-full flex justify-end items-center px-24 py-4">
        <Link
          to="/*"
          className=" hover:text-blue-500 text-purple-600 font-medium flex justify-center 
          items-center gap-4 text-xl border-b-4 border-b-transparent hover:border-b-4
           hover:border-blue-600"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="reply"
            className="svg-inline--fa fa-reply fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-10"
          >
            <path
              fill="currentColor"
              d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"
            ></path>
          </svg>
          Ir al home
        </Link>
      </div>
    </>
  );
};

export default NavBar;
