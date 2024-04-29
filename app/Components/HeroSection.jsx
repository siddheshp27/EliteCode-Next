"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

export function HeroSection() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const words = [
    {
      text: "Code",
    },
    {
      text: "on",
    },
    {
      text: "cloud",
    },
    {
      text: "with",
    },
    {
      text: "EliteCode.",
      className: "text-blue-500",
    },
  ];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 overflow-x-clip h-screen"
      >
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-neutral-200 text-xs sm:text-base  ">
            The road to cloud based coding starts here!
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col">
            <button
              className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-white text-black"
              onClick={() => loginWithRedirect()}
            >
              <span className="absolute -start-full transition-all group-hover:start-4">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm tracking-widest poppins-font font-extrabold rounded-xl transition-all group-hover:ms-4 text-center bg-white px-1 py-0.5 focus:outline-none">
                Log In
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
