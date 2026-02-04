import './App.css'
import InputCard from './assets/component/InputCard';
import MenuButton from './assets/component/MenuButton'

function App() {

  const menus = [
    { id: 1, label: "메일", color: "red" },
    { id: 2, label: "카페", color: "blue" },
    { id: 3, label: "블로그", color: "green" },
  ];

  const inputInfo = {
    title: "검색",
    placeholder: "검색어를 입력하세요",
  };

  return (
    <>
      <div>

        <h1>메뉴</h1>

        {menus.map((menu) => (
          <MenuButton key={menu.id} {...menu} />
        ))}
        <InputCard {...inputInfo} />
      </div>
    </>
  )
}

export default App
