import React from "react";
import questions from "./QuestionData";
// import Submit from "./Submit";

function QuestionContainer({ id }) {
  const {Id, content } = questions[id];
  const{myQuestion}=questions[id]
  console.log("my logs", Id, content, questions[id], myQuestion)

  return (
    <div className="question-container" key={id}>
<<<<<<< HEAD
      <div className="question-number">{id+1}.</div>
=======
      <div className="question-number">Ques. {id+1}</div>
>>>>>>> 04c97ab31d7b318732233790ce2c732798347c04
      <p className="question">{content}</p>
    </div>
  );
}

export default QuestionContainer;
