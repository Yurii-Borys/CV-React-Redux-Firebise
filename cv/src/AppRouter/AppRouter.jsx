import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/routes";

const AppRouter = () => {
    const isAuth = useSelector((state) => state.user.isAuth);

    return (
        <Routes>
            {!isAuth &&
                publicRoutes.map(({ path, element, exact }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                        exact={exact}
                    />
                ))}
            {isAuth &&
                privateRoutes.map(({ path, element, exact }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                        exact={exact}
                    />
                ))}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
