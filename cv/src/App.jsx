import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import "./index.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <Home />
                <About />
            </div>
        </div>
    );
}

export default App;
