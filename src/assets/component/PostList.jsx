import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserList = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data)
                setPosts(res.data)
                setLoading(false)
            })
            .catch((err)=>{
                console.error('데이터를 가져오는데 실패', err)
                setError('데이터 이동 실패')
                setLoading(false)
            })
    }, [])

    if(loading) return <p>로딩중</p>
    if(error) return <p>{error}</p>

    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {posts.map((u) =>(
                    <li key={u.id}>
                        {u.userId}
                        {u.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList