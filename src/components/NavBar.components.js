import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../utils/Context";
import { getTopics } from "../utils/api";
import { NavLink } from "react-router-dom";



const NavBar = () => {

const [topics, setTopics] = useState([])
const {user, setUser } = useContext(UserContext)

useEffect(() => {
    getTopics().then((res) => {
        setTopics(res)
    })
}, []);

    return (
        <>
       
        <nav className="navBar" >
        <NavLink to='/' className="homeNav">Max News</NavLink>
        <span className='topicsNav'>
        {topics.map((topic) => {
            return (
                <NavLink to={`/articles?topic=${topic.slug}`} className={isActive=> "singleTopic" + (!isActive ?  "unselected" : "")}>{topic.slug}</NavLink>
            )
        })}
     </span>
       </nav>
       
        <div className="login">
            {user.username ? (
                <div className='loggedIn'>
                    <p>Logged in as {user.username}</p>
                    <button className='login_button' onClick={() => {setUser(!user)}}>Log Out</button>
                </div>
            ) : (
                <button className='login_button' onClick={() => {
                    setUser({
                        username: 'jessjelly',
                        name: 'Jess Jelly',
                        avatar_url: 'https://media.istockphoto.com/photos/red-jelly-pudding-picture-id499660141?k=20&m=499660141&s=612x612&w=0&h=1WCwfMnW8QSR7GD5elBXHUYX3kLfZCWo7b5IYqiDtSA='
                    })
                }}>Log In</button>
            )
            }
            </div>
       
       

        </>
    )
}




export default NavBar


