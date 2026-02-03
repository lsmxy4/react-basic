import './Main.css'
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";

const techList = [
    {
        id: 1,
        title: "HTML",
        desc: "웹 구조를 만드는 마크업 언어",
        icon: htmlIcon,
    },
    {
        id: 2,
        title: "CSS",
        desc: "화면을 꾸미는 스타일 언어",
        icon: cssIcon,
    },
    {
        id: 3,
        title: "JavaScript",
        desc: "웹에 동작을 추가하는 언어",
        icon: jsIcon,
    },
];

const Main = () => {
    return (
        <main className="main">
            <h1>MAIN TITLE</h1>
            <ul className="tech-list">
                {techList.map((tech) => (
                    <li key={tech.id} className="tech-item">
                        <img src={tech.icon} alt={`${tech.title} icon`} />
                        <h3>{tech.title}</h3>
                        <p>{tech.desc}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Main
