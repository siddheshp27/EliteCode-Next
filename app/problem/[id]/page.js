"use client";
import ProblemPage from "@/app/Components/ProblemPage";
import NavMenu from "@/app/Components/NavMenu";
import { Auth0Provider } from "@auth0/auth0-react";

export default function prob({ params: { id } }) {
  async function Test() {}
  return (
    <Auth0Provider
      domain="dev-75u0gzvq2kz8rrir.us.auth0.com"
      clientId="LRl4LJvJ2Uu9VemQIDJgS6RSjvNvGPxM"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/",
      }}
    >
      <NavMenu />
      <ProblemPage probid={id} />
    </Auth0Provider>
  );
}
