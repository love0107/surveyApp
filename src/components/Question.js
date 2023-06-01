import React from "react";
// import questions from "./QuestionData";

function Question(){
    return (
        <>
        <div className="container">
        <div className="question-container">
        <div className="question-number">Ques. 1</div>
        <p className="question">this is some questions</p>
        </div>
       <div className="rating">
        <div className="rating-item">1</div>
        <div className="rating-item">2</div>
        <div className="rating-item">3</div>
        <div className="rating-item">4</div>
        <div className="rating-item">5</div>
       </div>
        <div className="button-box">
            <button className="my-button ">Previous</button>
            <button className="my-button ">Next</button>
        </div>
        </div>
        </>
    );
};
export default Question;