import React, { useEffect, useState } from "react";
import Hero from "../componants/Hero/Hero";
import Popular from "../componants/Popular/Popular";
import Offer from "../componants/Offer/Offer";
import NewCollection from "../componants/NewCollection/NewCollection";
import NewLetter from "../componants/NewLetter/NewLetter";
import BackgroundHero from "../componants/BackGroundHero/BackgroundHero";

const Shop = () => {
  const [heroCount, setHeroCount] = useState(1);

  return (
    <>
      <div>
        <BackgroundHero heroCount={heroCount} />
        <Hero heroCount={heroCount} setHeroCount={setHeroCount} />

        <Popular></Popular>
        <Offer></Offer>
        <NewCollection></NewCollection>
        <NewLetter></NewLetter>
      </div>
    </>
  );
};

export default Shop;

// useEffect(() => {
//   setInterval(() => {
//     setHeroCount((count) => {
//       return count === 2 ? 0 : count + 1;
//     });
//   }, 3000);

// }, []);
