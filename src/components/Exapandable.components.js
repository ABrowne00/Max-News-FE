import React, {useState } from 'react';



const Expandable = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

    return (
        <div>
            <button onClick={toggleOpen} className='loadBtn'>Load Comments</button>
            {isOpen && children}
        </div>
    )
}

export default Expandable