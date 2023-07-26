import React, { useState } from "react";
import Nav from "./Nav/Nav";
import ProfileMenu from "./Nav/ProfileMenu";

export default function NavMenu() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <Nav setIsHovering={setIsHovering} />
      {isHovering && <ProfileMenu setIsHovering={setIsHovering} />}
    </div>
  );
}
