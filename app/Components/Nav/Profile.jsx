import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenu";

const Profile = (props) => {
  const { isHovering, setIsHoveringProfile } = props;
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  return (
    isAuthenticated && (
      <div className="flex flex-col w-full items-center justify-center">
        {false && (
          <ProfileMenu
            setIsHoveringProfile={setIsHoveringProfile}
            isHovering={isHovering}
          />
        )}
        <img src={user.picture} className="rounded-full w-10 "></img>
      </div>
    )
  );
};

export default Profile;
