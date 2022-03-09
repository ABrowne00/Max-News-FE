import { getArticles } from "../utils/api";
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import NavBar from "./NavBar.components";
import { useSearchParams } from "react-router-dom";
import SortBy from "./sortBy.components";
import CommentIcon from '@mui/icons-material/Comment';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ArticleList = () => {

    let [searchParams] = useSearchParams();
    const [articles, setArticles] = useState([])
    const [sortValue, setSortValue] = useState('created_at')

    const searchTopic = searchParams.get('topic')
    const order = searchParams.get('order_by')
    


    

    useEffect(() => {
        getArticles(searchTopic, sortValue, order).then((res) => {
            setArticles(res)
            
        })
    }, [searchTopic, sortValue, order]);

    

    return (
        
        
        <div className="articles">
            <NavBar />
            <SortBy sortValue={sortValue} setSortValue={setSortValue}/>
        <ul className='articleList'>
            {articles.map((article) => {
                return (
                    <div key={article.article_id} className='articleCard'>
                       <h4 className='articleTopic'> {article.topic} </h4>
                       <h3 className="articleTitle"> <Link to={`/articles/${article.article_id}`}>{article.title}</Link> </h3>
                       
                       <h5>Author: {article.author}</h5>
                       <h6>Date: {article.created_at.split('T')[0]} </h6>

                      <div className="article_card_footer">
                      
                      
                       <p><ThumbUpIcon color='primary' />  {article.votes}</p>
                       <p><CommentIcon color='primary'/>  {article.comment_count}</p>
                       
                       </div>
                        </div>
                )
            })}
        </ul>
        </div>
    )

}

export default ArticleList