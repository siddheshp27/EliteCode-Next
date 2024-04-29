"use client";
import { useState } from "react";
import ProblemPage from "../../Components/ProblemPage";
import Nav from '../../Components/Nav/Nav';
import { Auth0Provider } from "@auth0/auth0-react";
// import Problem from "@/app/Components/ProblemPage/Problem";
export default function prob({ params: { id } }) {
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);
  async function Test() { }
  return (
    <Auth0Provider
      domain="dev-75u0gzvq2kz8rrir.us.auth0.com"
      clientId="LRl4LJvJ2Uu9VemQIDJgS6RSjvNvGPxM"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/dashboard",
      }}
    >
      <Nav setIsHoveringProfile={setIsHoveringProfile} isHoveringProfile={isHoveringProfile} />
      <ProblemPage probid={id} />
    </Auth0Provider>
  );
}
