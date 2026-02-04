import React from 'react'

const Button = ({ text, color = 'gray', children = null }) => {
    console.log(text)
    return (
        <button style={{ color: color }}>
            {text}-{color.toUpperCase()}
            <div>
                {children}
            </div>
        </button>
    )
}

export default Button