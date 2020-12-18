import React from 'react';
import {Link} from "@reach/router";

import AddQuestion from "./addQuestion";

function Movies(props) {
    let questions = props.questions;

    const mapFunction = element =>
        <Link to={`/question/${element.id}`} key={element.id}>
            <li>{element.title}</li>
        </Link>;

        const list = questions.map(mapFunction);

    return (
        <>
            <h3>Questions</h3>
            <ul>
                {list}
            </ul>

            <AddQuestion addQuestion={props.addQuestion}></AddQuestion>
        </>
    );
}

export default Movies;
