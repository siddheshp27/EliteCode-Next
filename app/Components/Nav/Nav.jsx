import React, { useState } from "react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import Image from "next/image";

export default function Nav({ setIsHovering }) {
  return (
    <div className="bg-[#1f2122] w-screen  h-14  flex justify-between  items-center">
      <img
        src="/image/elitecode-logo-transformed.png"
        className="h-[50px] relative left-2"
      />

      <LoginButton />
      <div
        className="absolute right-8 px-2 top-0 h-14 flex items-center"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <Profile />
      </div>
    </div>
  );
}
