import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    // return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <img
        src={user.picture}
        className="rounded-full w-[2.05rem]  h-[2.05rem]"
      ></img>
    )
  );
};

export default Profile;
