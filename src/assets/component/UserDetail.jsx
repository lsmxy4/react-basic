import React, { useEffect, useState } from 'react'
import './UserDetail.css'
import axios from 'axios'

const UserDetail = () => {

    const [userId, setUserId] = useState(1)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://dummyjson.com/users/${userId}`)
            .then((res) => {
                setUser(res.data)
                setLoading(false)
            })
    }, [userId])

    return (
        <div className='card-style'>
            <h2>사용자 상세</h2>
            <div className="button-group">
                <button onClick={() => setUserId(1)}>1번</button>
                <button onClick={() => setUserId(2)}>2번</button>
                <button onClick={() => setUserId(3)}>3번</button>
            </div>

            {loading && <p>로딩중</p>}
            {user && (
                <div className='printer'>
                    <p>이름: {user.firstName} {user.lastName}</p>
                    <p>이메일: {user.email}</p>
                    <p>회사명: {user.company.name}</p>
                </div>
            )}
        </div>
    )
}

export default UserDetail