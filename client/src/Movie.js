import React from 'react';
import {Link} from "@reach/router";

function Movie(props) {


    if (props){
        const id = props.id;
        Movie = props.getQuestion(id);
    }

    //let list = question.answers.map(answer =>
        //<li key={answer}>{answer}</li>
    //);

    return (
        <>
            <h3>{Movie.title}</h3>
            <Link to="/">Back</Link>
        </>
    );
}

export default Movie;
