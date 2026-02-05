import React from 'react'
import './Exam.css'

const Exam1 = ({ name, age }) => {
    return (
    <span>
      나의 이름은 <span className="name">{name}</span>이고
      나이는 <span className="age">{age}</span>살 이야
    </span>
  );
}

export default Exam1