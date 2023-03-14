import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "./FirebaseInitialize";
import { doc, onSnapshot } from "firebase/firestore";
import "./App.scss";
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
        //subscribe to firebase change
        const unsub = onSnapshot(
            doc(db, "user_info", "mGYcON1mIu9xtV8qhLmz"),
            (doc) => {
                getUserInformation(dispatch, doc.data());
            },
            (error) => {
                console.log(error);
            }
        );
        return () => {
            unsub();
        };
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
