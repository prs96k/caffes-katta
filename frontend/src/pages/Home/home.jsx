import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/exploremenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDowload from "../../components/AppDownload/AppDowload";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDowload />
    </div>
  );
};

export default Home;
