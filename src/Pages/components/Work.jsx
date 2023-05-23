import React from "react";
import people from "./../assets/people.svg";
import badge from "./../assets/badge.svg";
import rupee from "./../assets/rupee.svg";
import percent from "./../assets/percent.svg";
import file from "./../assets/file.svg";

import "./Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div>
      <p className="heading">How does it work ?</p>
      <div className="work">
        <div className="work-list">
          <img src={people} alt="people"></img>
          <div>
            <h4>Invite your Friends</h4>
            <p>Share the link tutedude.com with your friends</p>
          </div>
        </div>
        <div className="work-list">
          <img src={badge} alt="badge"></img>
          <div>
            <h4>Friend purchases any course</h4>
            <p>Using your REFERRAL CODE in the payments page</p>
          </div>
        </div>
        <div className="work-list">
          <img src={rupee} alt="rupee"></img>
          <div>
            <h4>You get ₹ 200 as referral money</h4>
            <p>On total purchase the friend makes, into your wallet</p>
          </div>
        </div>
        <div className="work-list">
          <img src={percent} alt="percent"></img>
          <div>
            <h4>Your Friend gets ₹ 200 Off </h4>
            <p>
              On his overall fee on successful purchase using your referral code
            </p>
          </div>
        </div>
        <div className="work-list">
          <img src={file} alt="file"></img>
          <div>
            <h4>Transfer money from wallet</h4>
            <p>
              When the wallet balance reaches ₹200 or more, you can withdraw it
            </p>
          </div>
        </div>
      </div>
      <div className="link-list">
        <Link className="link refer-link " to="/ReferEarn">
          Friends Who Enrolled
        </Link>
        <p className="link">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Work;
