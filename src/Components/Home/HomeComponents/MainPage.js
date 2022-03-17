import { React, useEffect, useState } from "react";

import HomeScreen from "./HomeScreen";
import FeaturedComponent from "./FeaturedComponent";

import Banner from "./Banner";
import Brands from "./Brands";
import BestSelling from "./BestSelling";


import banner from "../../../Assets/banner.png";
import spacejam from "../../../Assets/spacejam.jpg";
import { brands_logo_req } from "../../../Components/API/requests";


const MainPage = () => {

  const [logos, setLogo] = useState([]);

  useEffect(() => {

    const set_logos = async () => {
      return setLogo(brands_logo_req);
    }
    set_logos();
  }, []);


  return (
    <div className="mainPage">
      <HomeScreen />
      <FeaturedComponent />
      {/* <Banner image={spacejam} /> */}
      <BestSelling />
      <Banner image={banner} />
      <Brands logos={logos} />
    </div>
  );
};

export default MainPage;
