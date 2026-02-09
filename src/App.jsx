import React from 'react'
import SquareCale from './assets/component/SquareCale'
import SortableList from './assets/component/SortableList'
import PersonList from './assets/component/PersonList'

const App = () => {
  return (
    <div>
      <PersonList/>
      <SquareCale/>
      <SortableList/>
    </div>
  )
}

export default App