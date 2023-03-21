import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import Notification from "../../utils/notification/Notification";
import Input from "../../utils/input/Input";
import useInput from "../../hooks/useInput";
//import "../../components/contact/contact.scss";
import "./login.scss";
import { auth } from "../../FirebaseInitialize";
import { showNotification } from "../../reducers/notificationReducer";
import { authUser } from "../../reducers/userReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const isNotificationVisible = useSelector(
        (state) => state.notification.isNotificationVisible
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formRef = useRef();
    const emailValue = useInput("", {
        isEmpty: true,
        minLength: 3,
        isEmail: false,
    });

    const passwordValue = useInput("", {
        isEmpty: true,
        minLength: 1,
    });

    const logIn = (e) => {
        e.preventDefault();
        let email, password;

        Object.values(formRef.current).forEach((value) => {
            if (value.value) {
                if (value.name === "email") {
                    email = value.value;
                }
                if (value.name === "password") {
                    password = value.value;
                }
            }
        });

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { accessToken, uid } = userCredential.user;
                if (accessToken) {
                    navigate("/admin", { replace: true });
                    authUser();
                }
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(
                    showNotification(`${error.message}`, "notification__error")
                );
            });
    };
    return (
        <>
            <section className="login section">
                <div className="login__container container grid">
                    <div className="login__content">
                        <h3 className="login__title">Log in</h3>

                        <form
                            ref={formRef}
                            onSubmit={logIn}
                            className="login__form"
                        >
                            <div className="login__form-div">
                                <label className="login__form-tag">Email</label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Insert your email"
                                    inputValues={emailValue}
                                />
                            </div>

                            <div className="login__form-div">
                                <label className="login__form-tag">
                                    Password
                                </label>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Insert your password"
                                    inputValues={passwordValue}
                                />
                            </div>

                            <button
                                className="button button--flex"
                                disabled={
                                    !emailValue.inputValid ||
                                    !passwordValue.inputValid
                                }
                            >
                                Log in
                                {/* <svg
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512.00 512.00"
                                    xmlSpace="preserve"
                                    width="20px"
                                    height="20px"
                                    fill="white"
                                    stroke="white"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke="#fff;"
                                        stroke-width="11.264"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <polygon
                                            fill="#fff;"
                                            points="14.645,255.999 163.785,342.107 163.785,169.893 "
                                        ></polygon>{" "}
                                        <g>
                                            {" "}
                                            <path
                                                fill="#fff;"
                                                d="M289.729,200.716H178.43v-30.824c0-5.233-2.791-10.067-7.322-12.682 c-4.531-2.616-10.114-2.616-14.645,0L7.322,243.317C2.791,245.933,0,250.767,0,255.999s2.791,10.067,7.322,12.682l149.141,86.107 c2.266,1.309,4.793,1.962,7.322,1.962c2.528,0,5.057-0.655,7.322-1.962c4.531-2.616,7.322-7.45,7.322-12.682v-30.824h111.299 c8.087,0,14.645-6.556,14.645-14.645v-81.278C304.373,207.272,297.817,200.716,289.729,200.716z M149.141,316.742L43.934,255.999 l105.207-60.743v20.104v81.278V316.742z M275.084,281.993H178.43v-51.988h96.654V281.993z"
                                            ></path>{" "}
                                            <path
                                                fill="#fff;"
                                                d="M497.355,494.995h-448.7c-8.088,0-14.645-6.556-14.645-14.645V378.352 c0-8.088,6.556-14.645,14.645-14.645S63.3,370.264,63.3,378.352v87.354h419.411V46.294H63.3v87.354 c0,8.088-6.556,14.645-14.645,14.645s-14.645-6.556-14.645-14.645V31.65c0-8.088,6.556-14.645,14.645-14.645h448.7 c8.087,0,14.645,6.556,14.645,14.645v448.7C512,488.438,505.442,494.995,497.355,494.995z"
                                            ></path>{" "}
                                        </g>{" "}
                                        <rect
                                            x="341.834"
                                            y="128.096"
                                            fill="#fff;"
                                            width="85.915"
                                            height="255.797"
                                        ></rect>{" "}
                                        <path
                                            fill="#fff;"
                                            d="M427.748,398.541h-85.914c-8.087,0-14.645-6.556-14.645-14.645V128.104 c0-8.088,6.558-14.645,14.645-14.645h85.914c8.087,0,14.645,6.556,14.645,14.645v255.793 C442.393,391.985,435.836,398.541,427.748,398.541z M356.479,369.252h56.625V142.748h-56.625V369.252z"
                                        ></path>{" "}
                                    </g>
                                </svg> */}
                                <svg
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    width="20px"
                                    height="20px"
                                    fill="white"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <polygon
                                            fill="white"
                                            points="289.73,256 140.589,169.892 140.589,342.108 "
                                        ></polygon>{" "}
                                        <g>
                                            {" "}
                                            <path
                                                fill="white"
                                                d="M297.052,243.318L147.911,157.21c-4.531-2.617-10.114-2.616-14.645,0s-7.322,7.45-7.322,12.682 v30.824H14.645C6.556,200.716,0,207.273,0,215.361v81.278c0,8.088,6.556,14.645,14.645,14.645h111.299v30.824 c0,5.233,2.791,10.067,7.322,12.682c2.266,1.308,4.793,1.962,7.322,1.962c2.529,0,5.057-0.655,7.322-1.962l149.141-86.108 c4.531-2.616,7.322-7.45,7.322-12.682C304.374,250.767,301.584,245.933,297.052,243.318z M29.289,281.994v-51.988h96.655v51.988 H29.289z M155.233,316.743v-20.104v-81.278v-20.104L260.44,256L155.233,316.743z"
                                            ></path>{" "}
                                            <path
                                                fill="white"
                                                d="M497.355,494.995h-448.7c-8.088,0-14.645-6.556-14.645-14.645V378.352 c0-8.088,6.556-14.645,14.645-14.645S63.3,370.263,63.3,378.352v87.354h419.411V46.295H63.3v87.354 c0,8.088-6.556,14.645-14.645,14.645s-14.645-6.556-14.645-14.645V31.65c0-8.088,6.556-14.645,14.645-14.645h448.7 c8.088,0,14.645,6.556,14.645,14.645v448.701C512,488.438,505.444,494.995,497.355,494.995z"
                                            ></path>{" "}
                                        </g>{" "}
                                        <rect
                                            x="341.835"
                                            y="128.097"
                                            fill="white"
                                            width="85.916"
                                            height="255.798"
                                        ></rect>{" "}
                                        <path
                                            fill="white"
                                            d="M427.751,398.542h-85.916c-8.088,0-14.645-6.556-14.645-14.645V128.104 c0-8.088,6.556-14.645,14.645-14.645h85.916c8.088,0,14.645,6.556,14.645,14.645v255.793 C442.396,391.986,435.839,398.542,427.751,398.542z M356.48,369.253h56.626V142.749H356.48V369.253z"
                                        ></path>{" "}
                                    </g>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {isNotificationVisible && <Notification />}
        </>
    );
};

export default Login;
