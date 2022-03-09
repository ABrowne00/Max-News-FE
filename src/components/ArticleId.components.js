import { getArticleById, updateVotes } from "../utils/api";
import Comments from "../components/ArticleComments.components";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Expandable from "../components/Exapandable.components";
import NavBar from "./NavBar.components";
import { IconButton } from "@mui/material";
import ThumbUp from "@mui/icons-material/ThumbUp";


const ArticleId = () => {
   
   
    const { article_id } = useParams();
    const [article, setArticle ] = useState([]);
    
    const [disable, setDisable] = useState(false)

    


    useEffect(() => {
        getArticleById(article_id).then((res) => {
            setArticle(res)
          
            
        })
    }, [article_id]);

    const handleVote = () => {
       
        updateVotes(article_id)
        article.votes += 1
        setDisable(true);
    }

   
    
    

    return (

      <div>
          
        <div className='SingleArticle'>
            
            <NavBar />
            <div className='centerArticle'>
                 <h2>{article.title}</h2>
                 <h5>{article.author}</h5>
            </div>
            <div className='articleCard'>
            <p>{article.body}</p>
                <div className='articleVote'>
            <IconButton onClick={handleVote}  disabled={disable}><ThumbUp color={disable ? 'grey' : 'primary'}/></IconButton>
            <p>{article.votes}</p>
            </div>
            </div>
        <Expandable>
                <Comments />
            </Expandable>
      
        </div>
      
        </div>
    )
}

export default ArticleId