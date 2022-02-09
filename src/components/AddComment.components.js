import { postComment } from "../utils/api";
import React, {useState, useEffect } from 'react';
import { useParams } from "react-router";

const AddComment = () => {
    const [comment, setComment] = useState('')
    const  author  = 'jessjelly';
    const { article_id } = useParams();

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleComment = (event) => {
        event.preventDefault();
        const body = event.target[0].value;
        postComment(article_id, author, body).then(() => {
            setComment('');
        })
    }


return (
    <div>
    <form onSubmit={handleComment} className='commentForm'>
        <textarea type="text" onChange={handleChange} name='body' value={comment}>
            Please enter your comment
            </textarea>
        <button type='submit'>Enter</button>
    </form>
    </div>
)

}

export default AddComment
