import { getTopics } from "../utils/api";
import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar.components";


const Topics = () => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((res) => {
            setTopics(res)
        })
    }, []);

    return (
        <div className="topicsList">
        <h1>Topics</h1>
        <NavBar />
        </div>
    )


}

export default Topics