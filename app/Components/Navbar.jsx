"use client";
import React from "react";
import Profile from "../Components/Nav/Profile";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useAuth0 } from "@auth0/auth0-react";

export function Navbar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <div className="relative text-white w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
