import React from "react";
import Social from "./Social";
function Footer() {
  return (
    <div className="container  h-full">
      <div className="flex flex-col items-center justify-between">
        <Social
          containerStyles="flex gap-6 mb-4 mt-5"
          iconStyles="w-9 h-9 border boarder-accent rounded-full flex items-center justify-center"
        />
      </div>
    </div>
  );
}

export default Footer;
