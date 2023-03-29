import background from "../../assets/background.png";
import { FiLinkedin, FiUser, FiInstagram, FiGithub } from "react-icons/fi";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          height: "100%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="home">
          <div className="App-header">
            <div className="userRow">
              <FiUser className="icon-user" />
            </div>
            <p className="explanation">
              Hello, I'm Enver Coşkun KAÇALIN. I'm a software developer. I'll be
              here soon.
            </p>

            <div className="links">
              <a
                className="App-link"
                href="https://www.linkedin.com/in/eckacalin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                className="App-link"
                href="https://www.instagram.com/enver.kacalin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a
                className="App-link"
                href="https://github.com/enverkacalin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
