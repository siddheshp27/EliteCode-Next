import React from "react";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function ProfileMenu(props) {
  const { isHoveringProfile, setIsHoveringProfile } = props;
  const { user, isAuthenticated } = useAuth0();
  console.log(user);

  return (
    isAuthenticated && (
      <div
        className="absolute right-16 top-8 py-1 bg-[#181a1b] z-10"
        onMouseOver={() => setIsHoveringProfile(true)}
        onMouseOut={() => setIsHoveringProfile(false)}
      >
        <div className=" flex items-center w-full border-2 border-gray-300 border-x-0 bg-white py-4 px-8 mr-12 ">
          <img src={user.picture} className="rounded-full w-12 h-12 mr-4"></img>

          <ul className="list-none">
            <li className="font-bold text-base py-1">{user.name}</li>
            <li className=" text-xs">{user.email}</li>
          </ul>
        </div>
        <div className="bg-white">
          <LogoutButton />
        </div>
      </div>
    )
  );
}

export default ProfileMenu;
