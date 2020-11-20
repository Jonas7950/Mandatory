import React, {useEffect, useState} from 'react';
import {Router} from "@reach/router";
import Question from './Question.js';
const API_URL = process.env.REACT_APP_API;

function App() {
  const [questions, setQuestions] = useState([Question]);

  useEffect(() => {
    async function getData() {
      //const url = `${API_URL}/question`;
      const url = "questions.json"
      const response = await fetch(url);
      const questions = await response.json();
      console.log(questions);
      setQuestions(questions);
    }
    getData();
  }, []);

  function getQuestion(id) {
    if (questions !== undefined){
      console.log("questions exists")
      const question = questions.find(element => element.id === parseInt(id));
      console.log(question);
      return question;
    }
  }

  return (
      <>
        <h1>Flow Overstack</h1>

        <Router>
          <Question path="/Question/:id" getQuestion={getQuestion(1)}/>
        </Router>
      </>
  );
}

export default App;
