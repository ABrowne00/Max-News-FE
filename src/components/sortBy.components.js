import React from 'react';
import {Link} from 'react-router-dom';


const SortBy = ({ sortValue, setSortValue}) => {

const handleChange = (event) => {
    setSortValue(event.target.value)
} 

return (
    <div>
        <label for='filter'>Sort By: </label>
        <select name='filter' id='filter' onChange={handleChange}>
        <option value='created_at'>Date</option>
        <option value='votes'>Most Popular</option>
     </select>
        
    </div>
)
}

export default SortBy