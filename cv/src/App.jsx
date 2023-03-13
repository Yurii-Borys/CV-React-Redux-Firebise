import "./App.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInformation } from "./actions/user";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import "./index.scss";

function App() {
    const dispatch = useDispatch();
    const isVisible = useSelector((state) => state.user.isVisible);

    useEffect(() => {
        getUserInformation(dispatch);
    }, []);

    return (
        <>
            {!isVisible ? (
                <Loader />
            ) : (
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
            )}
        </>
    );
}

export default App;
