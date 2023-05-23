import React from "react";
import "./Enrolled.css";
import Card from "./components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Enrolled = () => {
  return (
    <main>
      <header>
        <Link to="/">{`UI/UX > Refer & Earn > Friends Referred`}</Link>
      </header>
      <div className="content">
        <div className="goBack">
          <AiOutlineArrowLeft />
          <p>go back</p>
        </div>
        <section className="enroll-header">
          <div className="your-ref-code">
            <p>Your Referral Code </p>
            <input type="text" value="EDCH54" />
          </div>
          <div className="wallet-balance">
            <div>
              <p>Wallet Balance</p>
              <span>₹ 500</span>
            </div>
          </div>
        </section>

        <section>
          <p className="heading">
            Friends who enrolled<span>(3)</span>
          </p>
          <div>
            <Card />
          </div>
        </section>
        <div>
          <p className="link enroll-terms">Terms & Conditions</p>
        </div>
      </div>
    </main>
  );
};

export default Enrolled;
