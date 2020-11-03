import React from 'react';
import {Link} from "@reach/router";

function question(props) {
    const id = props.id;
    const question = props.getQuestion(id);

    //let list = question.answers.map(answer =>
        //<li key={answer}>{answer}</li>
    //);

    return (
        <>
            <h3>{question.title}</h3>
            <p>{question.description}</p>
            <Link to="/">Back</Link>
        </>
    );
}

export default question();
