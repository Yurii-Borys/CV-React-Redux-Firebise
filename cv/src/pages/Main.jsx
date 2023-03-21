import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Home from "../components/home/Home";
import Qualification from "../components/qualification/Qualification";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Notification from "../utils/notification/Notification";

const Main = () => {
    const isNotificationVisible = useSelector(
        (state) => state.notification.isNotificationVisible
    );

    return (
        <>
            <Header />
            <div className="main">
                <Home />
                <About />
                <Skills />
                <Qualification />
                <Contact />
                <Footer />
                {isNotificationVisible && <Notification />}
            </div>
        </>
    );
};

export default Main;
