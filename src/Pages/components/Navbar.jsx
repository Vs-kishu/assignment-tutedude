import React from "react";
import logo from "./../assets/image 1.svg";
import profile from "./../assets/profile.svg";
import { FaAngleDown } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="TuteDude-logo" />
        </div>

        <div class="nav-link">
          <p>My Assignment</p>
          <p> Chat with Mentor</p>

          <div class="nav-profile">
            <img src={profile} alt="profile" />
            <p>Profile Name</p>
            <FaAngleDown />
          </div>
        </div>
        <button class="profile-btn">
          ProfileName
          <FaAngleDown />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
