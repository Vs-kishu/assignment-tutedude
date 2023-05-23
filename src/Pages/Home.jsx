import React from "react";
import "./home.css";
import BalanceCard from "./components/BalanceCard";
import ReferalCode from "./components/ReferalCode";

import Work from "./components/Work";

const Home = () => {
  return (
    <main>
      <header>
        <p>{"UI/UX > Refer & Earn"}</p>
      </header>
      <div className="content">
        <section className="section-1">
          <BalanceCard />
          <ReferalCode />
        </section>
        <section>
          <Work />
        </section>
      </div>
    </main>
  );
};

export default Home;
