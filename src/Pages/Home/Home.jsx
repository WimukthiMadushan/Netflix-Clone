import React from "react";
import "./Home.css";
import hero_banner from "./../../assets/hero_banner.jpg";
import hero_title from "./../../assets/hero_title.png";
import NavBar from "../../Components/NavBar/NavBar";
import play_icon from "./../../assets/play_icon.png";
import info_icon from "./../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quo a
            illum autem eligendi distinctio libero, aliquid eaque, corporis
            excepturi atque repudiandae earum magnam recusandae fugit sapiente
            sequi voluptatibus laborum mollitia reprehenderit beatae
            exercitationem. Doloribus delectus id nihil tempore pariatur.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only On Netflix"} category={"popular"} />
        <TitleCards title={"Upcomings"} category={"upcoming"} />
        <TitleCards title={"Topics For You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
