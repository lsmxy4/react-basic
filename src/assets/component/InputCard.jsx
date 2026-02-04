import React from 'react'

const InputCard = ({ title, placeholder }) => {
    return (
        <div>
            <h3>{title}</h3>
            <input
                placeholder={placeholder}
                onChange={(e) => console.log(e.target.value)}
            />
        </div>
    )
}

export default InputCard