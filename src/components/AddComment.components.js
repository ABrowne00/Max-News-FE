import { postComment } from "../utils/api";
import React, {useState,  useContext } from 'react';
import { useParams } from "react-router";

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

        {user.username ? (
    <form onSubmit={handleComment} className='comment_form'>
        <textarea type="text" onChange={handleChange} name='body' value={comment} placeholder='What do you think?' className="post_comment">
            </textarea>
        <button type='submit' className='submit_comment'>Post comment</button>
    </form> ) : (<text>Please login to leave a comment</text>)

}
    </div>
)

}

export default AddComment
