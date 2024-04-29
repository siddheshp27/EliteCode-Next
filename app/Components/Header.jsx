"use client";
import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { user } = useAuth0();

  return (
    <header className="h-60 flex items-center justify-center w-full poppins-font">
      <div className="flex items-center justify-between px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Welcome Back,
              <span className=" tracking-wider ml-2 underline underline-offset-4 ">
                {user?.nickname}
              </span>
            </h1>

            <p className="mt-1.5 text-lg text-center text-gray-200">
              Let's code a new problem today! 🎉
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
