import React from "react";
import Banner1 from "../Banner/Banner1";
import Banner2 from "../Banner/Banner2";
import Cards from "../Pages/Cards";
import { useLoaderData } from "react-router";

const Home = () => {
  const apps = useLoaderData();
  return (
    <div>
      <Banner1 />
      <Banner2 />
      <Cards apps={apps} limit={8} />
    </div>
  );
};

export default Home;
