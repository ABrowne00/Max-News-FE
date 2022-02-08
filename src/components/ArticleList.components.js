import { getArticles } from "../utils/api";
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

const ArticleList = () => {

       
    const [articles, setArticles] = useState([])

    

    useEffect(() => {
        getArticles().then((res) => {
            setArticles(res)
            console.log(res)
        })
    }, []);

    return (
        <div className="articles">
        <ul className='articleList'>
            {articles.map((article) => {
                return (
                    <li key={article.article_id} className='articleCard'>
                       <h4 className='articleTopic'> {article.topic} </h4>
                       <h3 className="articleTitle"> <Link to={`articles/${article.article_id}`}>{article.title}</Link> </h3>
                       
                       <h5>Author: {article.author}</h5>
                        </li>
                )
            })}
        </ul>
        </div>
    )

}

export default ArticleList