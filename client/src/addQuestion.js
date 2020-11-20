import React, {useState, useEffect} from 'react';

function AddQuestion(props) {
    const [title, setTitle] = useState("");

    return (
        <>
            <h3>Add Question</h3>

            <input onChange={(event) => setTitle(event.target.value)} type="text" placeholder="title" />

            <button type="button" onClick={(event) => props.addQuestion(title)}>
                Submit
            </button>
        </>
    );
}

export default AddQuestion;
