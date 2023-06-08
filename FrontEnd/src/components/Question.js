import React,{useState} from "react";
import QuestionContainer from "./QuestionContainer";
import Rating from "./Rating";
import Button from "./ButtonBox";
function Question(props){
    const [id, handleId]=useState(0);

    function nextQuestion(){
        console.log(id+1)
        handleId(id+1)
       
    }
    function prvQuestion(){
        console.log(id-1)
        handleId(id-1)
        
    }
    return (
        <div className="container" >
        <QuestionContainer id={id}/>
        <Rating id={id}/>
        <Button nextQuestion={nextQuestion} prvQuestion={prvQuestion} id={id}/>
        </div>
    );
};
export default Question;