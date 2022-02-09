import React from "react";
import NavBar from "./NavBar.components";
import ArticleList from "./ArticleList.components";

const Header = () => {

    return (
        <div className='header'>
        <h1>Max News</h1>
       
        <ArticleList />
        </div>
    )
}

export default Header