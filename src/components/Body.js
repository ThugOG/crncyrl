import { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import Shimmer from "./Shimmer";
import Carousel from "./Carousel";
const Body = () => {
  const [recentRelease, setRecentRelease] = useState([]);
  const getAnimeData = async () => {
    const data = await fetch("https://gogoanime.consumet.stream/popular");
    const json = await data?.json();
    // console.log(json)
    setRecentRelease(json);
  };
  const show = () => {
    console.log(recentRelease);
  };
  const handleInfiniteScroll = async() =>{
    // console.log("ScrollHeight" + document.documentElement.scrollHeight);
    try{

    }
    catch(e){
        console.log(error);
    }
  }
  useEffect(() => {
    getAnimeData();
  }, []);
  useEffect(()=>{
    window.addEventListener('scroll', handleInfiniteScroll)
  },[])
  return (
    <>
        <Carousel />
      {(recentRelease.length === 0)?
      <Shimmer />
      :(
      <div className="main-page-body">
        {/* {console.log("Loading.....")} */}
        {recentRelease.map((single, index) => {
          return <AnimeCard {...single} key={index} />;
        })}
      </div>
      )}
    </>
  );
};
export default Body;
