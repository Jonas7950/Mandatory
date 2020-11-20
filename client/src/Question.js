import React from 'react';
import {Link} from "@reach/router";

function question(props) {


    if (props){
        const id = props.id;
        question = props.getQuestion(id);
    }


    //let list = question.answers.map(answer =>
        //<li key={answer}>{answer}</li>
    //);

    return (
        <>
            <h3>{question.title}</h3>
            <Link to="/">Back</Link>
        </>
    );
}

export default question();
