import { useState } from "react";
import { images } from "../utils/carousalImages";
const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const handlePrev = () => {
    setCurrent(current - 1 < 0 ? current + images.length - 1 : current - 1);
  };
  const handleNext = () => {
    setCurrent((current + 1) % images.length);
  };
  return (
    <div className="carousal">
      <button className="btn-left" onClick={handlePrev}>
        <img src="https://img.icons8.com/ios-filled/50/null/left-angle-parentheses-key.png" />
      </button>
      <img src={images[current].url}></img>
      <div className="anime-carousal-data">
        <p className="anime-carousal-data-title">{images[current].name}</p>
        <p className="anime-carousal-data-desc">{images[current].desc}</p>
        <button>Watch Now</button>
      </div>
      <button className="btn-right" onClick={handleNext}>
        <img src="https://img.icons8.com/ios-filled/50/null/right-angle-parentheses-key.png" />
      </button>
    </div>
  );
};
export default Carousel;
