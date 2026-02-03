import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      <div className="layout">
        <Aside />
        <Main />
      </div>
      <Footer/>
    </div>
  )
}

export default App
