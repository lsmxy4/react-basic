import React from 'react'

const Section = ({ content, bgColor }) => {

    //   console.log(data.content)

    // const{content,bgColor} = data

    return (
        <div style={{ backgroundColor: bgColor }}>
            {content}
        </div>
    )
}

export default Section