import React, { useState } from "react";
import "./Questions.css";
import {questions} from "./questionData"
import Result from "../Resultpage/Result";


const Questions = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [displayScore, setdisplayScore] = useState(false)
  const [score, setScore] = useState(0)
 

  const answerClick =(isCorrect)=>{
 
   
    if(isCorrect === true){
      setScore(score+1)
    }
  
    const nextQuestion = currentQuestion +1
    if(nextQuestion < questions.length){

      setcurrentQuestion(nextQuestion)
    }else{
      setdisplayScore(true)

    }
  }
  return (
    <>
      {displayScore ? (
        <Result score={score}  />
      ) : (
        <>
          <h1>
            {currentQuestion + 1}/{questions.length}
          </h1>
          <div className="container-questions">
            <div>
              <img
                className="question-image"
                src={questions[currentQuestion].questionImage}
                alt="question"
              />
            </div>
            <div>
              <h1>
                Which shape should be the right most cell with a question mark ?
              </h1>
            </div>
            <div className="question-class">
              {questions[currentQuestion].answerImages.map((ansOptions) => (
                <button
                  
                  style={{ background: `url(${ansOptions.img})` }}
                  className="answerOptions"
                  onClick={() => answerClick(ansOptions.isCorrect)}
                ></button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Questions;
