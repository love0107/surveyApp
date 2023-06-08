import React, {useState} from "react";
import { surveyData } from "./config";
function Rating(props) {

    const [rating, setRating]=useState(0)
    surveyData[]

  return (
    <div className="rating">
      <button className="rating-item" value="1" onClick={()=>setRating(1)}>1</button>
      <button className="rating-item" value="2" onClick={()=>setRating(2)}>2</button>
      <button className="rating-item" value="3" onClick={()=>setRating(3)}>3</button>
      <button className="rating-item" value="4" onClick={()=>setRating(4)}>4</button>
      <button className="rating-item" value="5" onClick={()=>setRating(5)}>5</button>
    </div>
  );
}

export default Rating;
