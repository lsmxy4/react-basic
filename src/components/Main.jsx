import React from 'react'

const Main = () => {
    const name = 'Alice'
    const age = 22

    const number = [10,20,30,40]
    const obj ={
        city:'seoul',
        hobby:'programing'
    }

    const isLoggin = true

  return (
    <div>
        <p>
            {isLoggin? '로그인':'비 로그인'}
        </p>
        <h2>main 이다</h2>
        <p>내 이름은 {name}이다</p>
        <p>내 나이는 {age}살이다</p>
        <p>배열 : {number[0]}</p>
        <p>
            나는 {obj.city}에서 살며 취미는{obj.hobby}이다
        </p>
    </div>
  )
}

export default Main