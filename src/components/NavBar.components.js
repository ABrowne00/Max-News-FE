import { Link } from "react-router-dom";
import React from 'react';

const NavBar = () => {


    return (
        <nav className="navBar">
        <Link to='/' className="homeNav">Home</Link>
        <Link to='/topics' className='topicsNav'>Topics</Link>
        </nav>
    )
}




export default NavBar







// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {

//     return (
//         <nav className="navbar">
//             <Link to='/' className="homeNav">Home</Link>
//             <Link to='/categories'className="catNav">Categories</Link>
//             <Link to='/items' className="itemNav">Items</Link>
//             <Link to='/sell-item' className="sellNav">SellSellSell</Link>
//      </nav>
//     )
// }