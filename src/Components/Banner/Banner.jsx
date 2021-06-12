import React, { useEffect, useState } from "react";
import Axios from "../../Axios";
import { API_KEY, imgURL } from "../../Constants/Constants";
import "./Banner.css";

function Banner() {
  //SATATES
  const [banner, setbanner] = useState();

  //USE EFFECT
  useEffect(() => {
    Axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      setbanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    });
  }, []);

  //Function for trim the Overview para (Truncate)

  function truncate(str,num){
    return str?.length > num ? str.slice(0, num) + "..." : str
  }
  return (
    <div
      style={{
        backgroundImage: `url(${banner ? imgURL + banner.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">
          {banner ? banner.title || banner.original_name || banner.name : ""}
        </h1>
        <div className="banner-buttons">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <h1 className="description">{truncate(banner?.overview, 150)}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
