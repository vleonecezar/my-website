import './App.css';

function App() {
  return (
    <div className="App">
        <header>
        <div className="container">
            <a id ="header-logo" href="#">VitorCezar</a>
                <nav id="header-navbar">
                    <ul>
                        <li>
                            <a href="#">sobre</a>
                        </li>
                        <li>
                            <a href="#">portfólio</a>
                        </li>
                        <li>
                            <a href="#">contato</a>
                        </li>
                    </ul>
                </nav>
        </div>
    </header>
        <footer>
            <div className="container">
                <nav id="footer-navbar">
                    <ul id="nav-items">
                        <li>
                            <a href="#">sobre</a>
                        </li>
                        <li>
                            <a href="#">portfólio</a>
                        </li>
                        <li>
                            <a href="#">contato</a>
                        </li>
                    </ul>
                </nav>
                <p>© 2021 Vitor Cezar</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
