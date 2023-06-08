import React,{useState} from "react";
import QuestionContainer from "./QuestionContainer";
import Rating from "./Rating";
import Button from "./ButtonBox";
import questions from "./QuestionData";
function Question(props){
    const [id, handleId]=useState(0);

    function nextQuestion(){
        if (id+1<questions.length){
        console.log(id+1)
        handleId(id+1)
        }
    }
    function prvQuestion(){
        if(id-1>=0){
        console.log(id-1)
        handleId(id-1)
        }
        
    }
    return (
        <div className="container" >
        <QuestionContainer id={id}/>
        <Rating/>
        <Button nextQuestion={nextQuestion} prvQuestion={prvQuestion} id={id}/>
        </div>
    );
};
export default Question;