import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://maximum-news.herokuapp.com/api'
})


export const getTopics = () => {
    return newsApi.get('/topics').then((res) => {
        return res.data.topics;
    })
}