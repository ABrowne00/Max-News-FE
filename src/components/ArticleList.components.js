import { getArticles } from "../utils/api";
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import NavBar from "./NavBar.components";
import { useSearchParams } from "react-router-dom";


const ArticleList = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState([])

    const searchTopic = searchParams.get('topic')
    const sortBy =searchParams.get('sort_by')
    const order = searchParams.get('order_by')
   

    

    useEffect(() => {
        getArticles(searchTopic, sortBy, order).then((res) => {
            setArticles(res)
            
        })
    }, [searchTopic, sortBy, order]);

    return (
        
        
        <div className="articles">
            <NavBar />
        <ul className='articleList'>
            {articles.map((article) => {
                return (
                    <li key={article.article_id} className='articleCard'>
                       <h4 className='articleTopic'> {article.topic} </h4>
                       <h3 className="articleTitle"> <Link to={`/articles/${article.article_id}`}>{article.title}</Link> </h3>
                       
                       <h5>Author: {article.author}</h5>
                       <h6>Comments: {article.comment_count}</h6>
                       <h6>Date: {article.created_at}</h6>
                        </li>
                )
            })}
        </ul>
        </div>
    )

}

export default ArticleList