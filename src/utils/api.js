import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://maximum-news.herokuapp.com/api'
})


export const getTopics = () => {
    return newsApi.get('/topics').then((res) => {
        return res.data.topics;
    })
}

export const getArticles  = (searchTopic, sortValue, order) => {

    let path = '/articles';

    if (searchTopic) {
        path += `?topic=${searchTopic}`
    }
    else if (sortValue) {
        path += `?sort_by=${sortValue}`
    }
    else if (order) {
        path += `?order_by=${order}`
    }
    return newsApi.get(path).then((res) => {
        return res.data.articles;
    })
}


export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article;
    })
}


export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data.comments
    })
}


export const updateVotes = (article_id) => {
    return newsApi.patch(`articles/${article_id}`, {inc_votes: 1}).then((res) => {
        return res.data.article.votes
    })
}


export const downVote = (article_id) => {
    return newsApi.patch(`article/${article_id}`, {inc_votes: -1}).then((res) => {
        return res.data.article.votes
    })
}

export const postComment = (article_id, request) => {
    return newsApi.post(`/articles/${article_id}/comments`, request)
    .then((res) => {
        return res.data.comment
    })
}

export const deleteComment = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`).then((res) => {
        return res
    })
}