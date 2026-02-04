import React from 'react'

const Main = ({ content, bgcolor }) => {
    return (
        <div style={{
            backgroundColor: bgcolor,
            margin: '20px',
            padding: '20px'
        }}>
            {content}
        </div>
    )
}

export default Main
