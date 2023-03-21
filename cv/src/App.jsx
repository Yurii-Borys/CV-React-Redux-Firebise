import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import { db } from "./FirebaseInitialize";
import { doc, onSnapshot } from "firebase/firestore";
import "./App.scss";
import { getUserInformation } from "./actions/user";
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
        <BrowserRouter>
            {!isVisible ? (
                <Loader />
            ) : (
                <div className="App">
                    <AppRouter />
                </div>
            )}
        </BrowserRouter>
    );
}

export default App;
