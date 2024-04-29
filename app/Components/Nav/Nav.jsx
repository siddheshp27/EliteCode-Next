import React, { useState } from "react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import Image from "next/image";

export default function Nav({ isHoveringProfile, setIsHoveringProfile }) {
  return (
    <div className="w-screen bg-transparent  h-20  flex justify-between  items-center">
      <img
        src="/image/elitecode-logo-transformed.png"
        className="h-[50px] relative left-4"
      />

      <LoginButton />
      <div
        className="absolute right-8 px-2 top-0 h-14 flex items-center"
        onMouseEnter={() => setIsHoveringProfile(true)}
        onMouseLeave={() => setIsHoveringProfile(false)}
      >
        <Profile
          setIsHoveringProfile={setIsHoveringProfile}
          isHovering={isHoveringProfile}
        />
      </div>
    </div>
  );
}
