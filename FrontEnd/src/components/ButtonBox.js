import React from "react";

function Button({ nextQuestion, prvQuestion, id }) {
  const disableStyle = { cursor: "not-allowed" };
  const enableStyle = { cursor: "pointer" };

  return (
    <div className="button-box">
      <button
        className="my-button"
        onClick={prvQuestion}
        style={id <= 0 ? disableStyle : enableStyle}
      >
        Previous
      </button>
      <button className="my-button" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default Button;