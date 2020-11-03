import React, {useEffect, useState} from 'react';
import {Router} from "@reach/router";
import Question from './Question';

const API_URL = process.env.REACT_APP_API;

function App() {
  const [questions, setQuestions] = useState("No data :(");

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/question`;
      const response = await fetch(url);
      const questions = await response.json();
      setQuestions(questions.msg);
    }
    getData();
  }, []);

  function getQuestion(id) {
    const question = questions.find(element => element.id === parseInt(id));
    return question;
  }

  return (
      <>
        <h1>Cooking App</h1>
        <Router>
          <Question path="/recipe/:id" getRecipe={getQuestion()}/>
        </Router>
      </>
  );
}

export default App;
