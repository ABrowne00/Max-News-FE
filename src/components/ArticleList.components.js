import { getArticles } from "../utils/api";
import React, {useState, useEffect} from 'react';

const ArticleList = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((res) => {
            setArticles(res)
        })
    }, []);

    return (
        <div className="articles">
        <ul className='articleList'>
            {articles.map((article) => {
                return (
                    <li key={article.article_id} className='articleCard'>
                       <h3 className="articleTitle"> {article.title} </h3>
                       <h4 className='articleTopic'> {article.topic} </h4>
                       <h5>Author: {article.author}</h5>
                        </li>
                )
            })}
        </ul>
        </div>
    )

}

export default ArticleList