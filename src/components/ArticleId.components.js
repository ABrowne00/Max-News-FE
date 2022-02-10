import { downVote, getArticleById, updateVotes } from "../utils/api";
import Comments from "../components/ArticleComments.components";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Expandable from "../components/Exapandable.components";
import NavBar from "./NavBar.components";



const ArticleId = (votes) => {
   
   
    const { article_id } = useParams();
    const [article, setArticle ] = useState([]);
    const [articleVotes, setVotes] = useState(votes)


    useEffect(() => {
        getArticleById(article_id).then((res) => {
            setArticle(res)
            
        })
    }, [article_id]);

    const handleVote = () => {
        setVotes((currVotes) => currVotes + 1);
        updateVotes(article_id)
        {article.votes += 1}
        document.getElementById('myUp').disabled = true;
    }

   
    
    

    return (
        <div className='SingleArticle'>
            <NavBar />
            <div className='centerArticle'>
                 <h2>{article.title}</h2>
                 <h5>{article.author}</h5>
            </div>
            <h6> {article.created_at}</h6>
            <div className='articleCard'>
            <p>{article.body}</p>
            <p>{article.votes}</p>
            <button onClick={handleVote} id='myUp'>I love it</button>
            </div>
        <Expandable>
                <Comments />
            </Expandable>
           
        </div>
    )
}

export default ArticleId