import React from "react";
import FilmList from "../components/filmList";
import Carousel from "../components/Carousel";

const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <FilmList />
    </div>
  );
};

export default Home;
