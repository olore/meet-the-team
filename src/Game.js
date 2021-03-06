import React, { useState } from 'react';
import data from './data.json';
import { generateQuestions } from './game-helper';
import Question from './Question';
import ImageButton from './ImageButton.js';

export default function Game(props) {

  const questions = generateQuestions(data.people);
  const [numWrong, setNumWrong] = useState(0);
  const [numRight, setNumRight] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [question, setQuestion] = useState(questions[0]);

  const wrong = () => {
    setNumWrong(numWrong + 1);
    setWrongAnswer(true);
  }

  const right = () => {
    setNumRight(numRight + 1);
    nextQuestion();
  }

  const nextQuestion = () => {
    setWrongAnswer(false);
    let nextIdx = questionIdx + 1;
    setQuestionIdx(nextIdx);
    setQuestion(questions[nextIdx]);
  }

  if (wrongAnswer) {
    return <ImageButton wrongAnswer={true} onClick={nextQuestion}></ImageButton>
  }

  return <div>
    {questionIdx <= 4 &&
      <div>
        <h2>Right: {numRight}, Wrong: {numWrong}</h2>
        <Question question={question} wrong={wrong} right={right}></Question>
      </div>
    }
    {questionIdx === 5 &&
      <div>
        <h1>You're done!</h1>
        <h2>You managed to get {numRight} out of 5 correct!</h2>
        <p>Thanks for playing</p>
        <br/>
        <button style={{fontSize: "22px"}} onClick={() => { window.location.reload(); }}>Play again</button>
      </div>
    }
  </div>;

}