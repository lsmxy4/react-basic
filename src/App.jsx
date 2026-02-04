import './App.css'
import Button from './assets/component/Button'
import Main from './assets/component/Main'
import Section from './assets/component/Section'

function App() {

  const sectionData = {
    content: '데이터',
    bgColor: 'skyBlue'
  }


  return (
    <>
      {/* <Section data ={'sectionData'}/> */}
      <Section {...sectionData} />
      <hr />
      <Main content={'Main'} bgcolor={'yellow'} />
      <hr />
      <Button text={'메일'} color={'red'} />
      <Button text={'카페'} color={'blue'} >
        <span>자식요소blue</span>
      </Button>
      <Button text={'블로그'} color={'green'}>
        <span>자식요소graan</span>
      </Button>
      <Button text={'블로그'} />
      <h1>hello react</h1>
    </>
  )
}

export default App
