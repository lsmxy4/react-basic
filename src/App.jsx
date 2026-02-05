import './App.css'
import Counter from './assets/component/Counter'
import Exam1 from './assets/component/Exam1'
import Exam2 from './assets/component/Exam2'
import Exam3 from './assets/component/Exam3'
import InputFocus from './assets/component/InputFocus'
import Counter2 from './assets/component/Counter2'

function App() {
    const user={
    name:'Alice',
    age:21
  }

return (
  <>
    <div>
      <h2>useStatus 연습</h2>
      <InputFocus/>
      <Counter2/>
      <hr />
      <Exam3 />
      <Exam1 name={user.name} age={user.age}/>
      <Exam2 />
      <Counter />
    </div>
  </>
)
}

export default App
