import React from 'react'

const Button = ({increment, onClickFunction}) => {
    const handleClick = () => {
        onClickFunction(increment);
    }

    return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40" onClick={handleClick}>{increment}</button>
}

export default Button