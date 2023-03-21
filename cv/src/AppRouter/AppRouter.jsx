import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/routes";

const AppRouter = () => {
    const auth = false;
    return (
        <Routes>
            {true &&
                publicRoutes.map(({ path, element, exact }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                        exact={exact}
                    />
                ))}
            {true &&
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
