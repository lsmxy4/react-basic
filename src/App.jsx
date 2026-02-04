import './App.css'
import MenuButton from './assets/component/MenuButton'

function App() {

   const menus = [
    { id: 1, label: "메일", color: "red" },
    { id: 2, label: "카페", color: "blue" },
    { id: 3, label: "블로그", color: "green" },
  ];


  return (
    <>
      <h1>메뉴</h1>

      {menus.map((menu) => (
        <MenuButton key={menu.id} {...menu} />
      ))}
    </>
  )
}

export default App
