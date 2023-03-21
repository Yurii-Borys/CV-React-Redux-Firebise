import Admin from "../pages/Admin";
import Main from "../pages/Main";
import Login  from "../pages/login/Login";

export const publicRoutes = [
    { path: "/", element: <Main /> , exact: true },
    { path: "/login", element: <Login /> , exact: false }
];

export const privateRoutes = [
    { path: "/", element: <Main />, exact: true},
    { path: "/admin", element: <Admin /> , exact: false }
]