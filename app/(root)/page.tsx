import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
    const loggedIn = {firstName: "Fidel"}
  return (
    <section className="home">
      <div className="home-content">
        <header className="content-heae">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
        <TotalBalanceBox
        accounts ={[]}
        totalBanks ={1}
        totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  );
};

export default Home;
