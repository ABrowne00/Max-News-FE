import { getArticles } from "../utils/api";
import React, {useState, useEffect} from 'react';


const Topics = () => {

       
    const [articles, setArticles] = useState([])

    

    useEffect(() => {
        getArticles().then((res) => {
            setArticles(res)
            
        })
    }, []);

    const cookingTopic = articles.filter((article) => article.topic === 'cooking')
    console.log(cookingTopic)

return (

    <div className='topicList'>
        <ul className='cookingList'>
            {cookingTopic.map((cook) => {
            return (
                <h5>{cook.title}</h5>
            )})}
        </ul>

    </div>
)}

export default Topics