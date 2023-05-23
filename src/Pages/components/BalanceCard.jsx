import React from "react";
import "./BalanceCard.css";

const BalanceCard = () => {
  return (
    <div className="balance-card">
      <div className="balance-details">
        <div className="balance-card-header">
          <p>Referral Earning</p>
          <h1>₹ 2,500</h1>
        </div>
        <div className="balance-card-header">
          <p>Total Referrals</p>
          <h1>7</h1>
        </div>
        <div className="balance-card-header">
          <p>Wallet Balance</p>
          <h1>₹ 500</h1>
        </div>
      </div>
      <div className="withdraw-btn">
        <input type="button" value="Withdraw Balance" />
      </div>
    </div>
  );
};

export default BalanceCard;
