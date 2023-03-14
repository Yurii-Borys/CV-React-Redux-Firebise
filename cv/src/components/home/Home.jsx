import React from "react";
import { useSelector } from "react-redux";
import "./home.scss";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown.jsx";

const Home = () => {
    const [imgBase64] = useSelector((state) => [
        state.user?.currentUser.payload?.imgBase64,
    ]);

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <img
                        src={imgBase64}
                        alt="profile"
                        className="home__img"
                    ></img>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;
