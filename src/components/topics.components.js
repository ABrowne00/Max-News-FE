import { getTopics } from "../utils/api";
import React, { useState, useEffect } from 'react';


const Example = () => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((res) => {
            console.log(res)
        })
    }, []);

    return (
        <h1>hi</h1>
    )


}

export default Example