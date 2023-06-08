import React from "react";
import questions from "./QuestionData";
// import Submit from "./Submit";

function QuestionContainer({ id }) {
  const {Id, content } = questions[id];
  const{myQuestion}=questions[id]
  console.log("my logs", Id, content, questions[id], myQuestion)

  return (
    <div className="question-container" key={id}>
      <div className="question-number">Ques. {id+1}</div>
      <p className="question">{content}</p>
    </div>
  );
}

export default QuestionContainer;
