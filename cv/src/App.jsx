import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./index.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <Home />
                <About />
                <Skills />
                <Qualification />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
