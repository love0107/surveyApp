import React from "react";
import QuestionContainer from "./QuestionContainer";
import Rating from "./Rating";
import Button from "./ButtonBox";
function Question(props){
    return (
        <div className="container">
        <QuestionContainer/>
        <Rating/>
        <Button/>
        </div>
    );
};
export default Question;