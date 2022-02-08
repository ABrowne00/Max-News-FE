import { getArticleById } from "./api";
import Comments from "../components/ArticleComments.components";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Expandable from "../components/Exapandable.components";

const ArticleId = () => {
    const { article_id } = useParams();
    const [article, setArticle ] = useState([]);


    useEffect(() => {
        getArticleById(article_id).then((res) => {
            setArticle(res)
            
        })
    }, []);
    

    return (
        <div className='SingleArticle'>
            <div className='centerArticle'>
                 <h2>{article.title}</h2>
                 <h5>{article.author}</h5>
            </div>
            <h6> {article.created_at}</h6>
            <div className='articleCard'>
            <p>{article.body}</p>
            <p>{article.votes} upvotes</p>
            </div>
        <Expandable>
                <Comments />
            </Expandable>
           
        </div>
    )
}

export default ArticleId