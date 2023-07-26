"use client";
import React from "react";
import { useState, useEffect } from "react";
import NavMenu from "./Components/NavMenu";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import ProblemPage from "./Components/ProblemPage";

const App = () => {
  return (
    <Auth0Provider
      domain="dev-75u0gzvq2kz8rrir.us.auth0.com"
      clientId="LRl4LJvJ2Uu9VemQIDJgS6RSjvNvGPxM"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/",
      }}
    >
      <div className="main h-screen w-full">
        <NavMenu />
      </div>
    </Auth0Provider>
  );
};

export default App;
