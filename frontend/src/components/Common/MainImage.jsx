import React, { useState } from "react";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";
import BackgroundImage from "../../assets/img/background-pc.png";
import BackgroundMobImage from "../../assets/img/background-sp.png";
import Header from "./Header";

const MainImage = () => {
  const [checkUser, setCheUser] = useState(false);
  return (
    <>
      <section class="section1 ">
        <img src={BackgroundImage} class="background-pc" />
        <img src={BackgroundMobImage} class="background-sp" />
        <div class="main-img">
          <h1>Dino's Pizzeria</h1>
          <p>Pizza is our superPower.</p>
        </div>
      </section>

     

      {checkUser && (
        <p class="img">
          <a href="/cart">
            <img src={ImageCartLogo} alt="" />
          </a>
        </p>
      )}
    </>
  );
};
export default MainImage;
