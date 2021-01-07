import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <Router>
    <div className="App">
        <header>
        <div className="container">
            <a id ="header-logo" href="http://localhost:3000">VitorCezar</a>
            <nav id="header-navbar">
                <ul>
                    <li>
                        <a href="http://localhost:3000">sobre</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000">portfólio</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000">contato</a>
                    </li>
                    </ul>
                </nav>
        </div>
    </header>
        <Routes/>
        <footer>
            <div className="container">
                <nav id="footer-navbar">
                    <ul id="nav-items">
                        <li>
                            <a href="http://localhost:3000">sobre</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000">portfólio</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000">contato</a>
                        </li>
                    </ul>
                </nav>
                <p>© 2021 Vitor Cezar</p>
            </div>
        </footer>
    </div>
    </Router>
  );
}

export default App;
