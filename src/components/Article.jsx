import React from 'react'
import'./Article.css'

const Article = () => {

    const uesr = {
        name: 'Alice',
        isLogin: false
    }

    return (
        <div>
            {uesr.isLogin ?
                (<div className='login'>로그인</div>) : 
                (<div className='logout'>로그아웃</div>)}
        </div>
    )
}

export default Article