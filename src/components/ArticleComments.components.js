import { getComments } from "../utils/api";
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import AddComment from "./AddComment.components";

const Comments = () => {
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        getComments(article_id).then((res) => {
            setComments(res)
        })
    }, []);

    return (
        <div className="articleComments">
           <AddComment />
            <ul className="commentList">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className="commentCard">
                            <h6>{comment.author}  {comment.created_at}</h6>
                            <p>{comment.body}</p> 
                            <p>{comment.votes}</p>
                            </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Comments