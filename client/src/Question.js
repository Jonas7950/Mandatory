import React from 'react';
import {Link} from "@reach/router";

function Question(props) {


    if (props){
        const id = props.id;
        Question = props.getQuestion(id);
    }

    //let list = question.answers.map(answer =>
        //<li key={answer}>{answer}</li>
    //);

    return (
        <>
            <h3>{Question.title}</h3>
            <Link to="/">Back</Link>
        </>
    );
}

export default Question();
