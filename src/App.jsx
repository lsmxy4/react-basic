import './App.css'
import Button from './assets/component/Button'
import Main from './assets/component/Main'
import Section from './assets/component/Section'
import Input from './assets/component/Input'

function App() {

  const sectionData = {
    content: '데이터',
    bgColor: 'skyBlue'
  }


  const handlechange=(value)=>{
        console.log('입력중',value)
    }

  return (
    <>
      <Input 
      inputValue = {'hello react'}
      title = {'input title'}
      placeholder = {'입력요망'}
      onChange={handlechange}
      />
      <hr />
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
