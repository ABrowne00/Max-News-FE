import { postComment } from "../utils/api";
import React, {useState, useEffect, useContext } from 'react';
import { useParams } from "react-router";

import ArticleComments from '../components/ArticleComments.components'
import Comments from "../components/ArticleComments.components";
import { UserContext } from "../utils/Context";

const AddComment = (  {comments, setComments } ) => {
    const [comment, setComment] = useState('')
    const   { user }  = useContext(UserContext);
    const { article_id } = useParams();

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleComment = (event) => {
        event.preventDefault();
        
        postComment(article_id, {username: user.username, body: comment}).then((res) => {
            const newComments = comments.map((comment) => {
                return comment
            })
            newComments.push(res[0])
            setComments(newComments)
            setComment('');
            console.log(res)
        })
    }

   


return (
    <div>
    <form onSubmit={handleComment} className='commentForm'>
        <textarea type="text" onChange={handleChange} name='body' value={comment} placeholder='What do you think?'>
            </textarea>
        <button type='submit'>Post a comment</button>
    </form>
    </div>
)

}

export default AddComment
