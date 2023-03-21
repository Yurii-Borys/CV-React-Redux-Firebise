import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRouter from "./AppRouter/AppRouter";
import { db, auth } from "./FirebaseInitialize";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { getUserInformation } from "./actions/user";
import { authUser, signOutUser } from "./reducers/userReducer";
import Loader from "./components/loader/Loader";
import "./index.scss";

function App() {
    const dispatch = useDispatch();
    const isVisible = useSelector((state) => state.user.isVisible);

    useEffect(() => {
        //Check if log in admin
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(authUser());
            } else {
                dispatch(signOutUser());
            }
        });

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
