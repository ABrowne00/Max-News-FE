import { getComments } from "../utils/api";
import React, { useState, useEffect, useContext } from 'react';
import {useParams} from 'react-router-dom';
import AddComment from "./AddComment.components";
import { deleteComment } from "../utils/api";
import { UserContext } from "../utils/Context"

const Comments = () => {
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const {user} = useContext(UserContext)
    
    useEffect(() => {
        getComments(article_id).then((res) => {
            setComments(res)
        })
    }, [article_id]);

    const onDelete = (comment_id) => {
        deleteComment(comment_id)
            .then((res) => {
                const newComments = comments.map((comment) => {
                    return {...comment};
                })
                const updatedComments = newComments.filter((comment) => {
                    return comment.comment_id !== comment_id;
                })
                setComments(updatedComments)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    return (
        <div className="articleComments">
           <AddComment  comments={comments} setComments={setComments}/>
            <ul className="commentList">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className="commentCard">
                            <h4 className="commentAuthor">{comment.author}</h4>
                            <h6>{comment.created_at.split('T')[0]}</h6>
                            <p>{comment.body}</p> 
                           
                            { user.username === comment.author ? (
                            <button type='button' className='deletBtn' onClick={() => onDelete(comment.comment_id)}>Delete</button>
                            ) : null} 
                            </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Comments