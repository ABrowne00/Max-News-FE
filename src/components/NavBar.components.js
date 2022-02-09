import { Link } from "react-router-dom";
import React from 'react';

const NavBar = () => {


    return (
        <nav className="navBar">
        <Link to='/' className="homeNav">Home</Link>
        <Link to='/articles' className='topicsNav'>Topics</Link>
        <Link to='/articles?topic=cooking' className='cookNav'>Cooking</Link>
        <Link to='/articles?sort_by=votes' className='voteSort'>Votes</Link>
        <Link to='/articles?order_by=asc' className='dateSort'>Date</Link>
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