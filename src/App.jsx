import React, { useState } from 'react'
import './App.css'
import Counter from './assets/component/Counter'
import Exam1 from './assets/component/Exam1'
import Exam2 from './assets/component/Exam2'
import Exam3 from './assets/component/Exam3'
import InputFocus from './assets/component/InputFocus'
import Counter2 from './assets/component/Counter2'
import LifeCycle from './assets/component/LifeCycle'

function App() {
  const [state, setState] = useState(true)
  const user = {
    name: 'Alice',
    age: 21
  }

  return (
    <>
      <div>
        <h2>useStatus 연습</h2>
        <button onClick={()=>setState(true)}>마운트</button>
        <button onClick={()=>setState(false)}>언마운트</button>
        {state &&
          <LifeCycle />
        }
        <hr />
        <InputFocus />
        <Counter2 />
        <hr />
        <Exam3 />
        <Exam1 name={user.name} age={user.age} />
        <Exam2 />
        <Counter />
      </div>
    </>
  )
}

export default App
