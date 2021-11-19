import React from 'react'

const OperatorButton = ({operator, onClickFunction}) => {
    const handleClick = () => {
        onClickFunction(operator);
    }

    return <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40" onClick={handleClick}>{operator}</button>
}

export default OperatorButton