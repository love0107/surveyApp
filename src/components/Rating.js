import React from "react";

function Rating() {
  return (
    <div className="rating">
      <label>
        <input type="radio" name="rating" value="1" className="rating-item" />
        1
      </label>
      <label>
        <input type="radio" name="rating" value="2" className="rating-item" />
        2
      </label>
      <label>
        <input type="radio" name="rating" value="3" className="rating-item" />
        3
      </label>
      <label>
        <input type="radio" name="rating" value="4" className="rating-item" />
        4
      </label>
      <label>
        <input type="radio" name="rating" value="5" className="rating-item" />
        5
      </label>
    </div>
  );
}

export default Rating;
