// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword"
import NewPassword from "../pages/NewPassword"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";

// Style
import '../styles/global.sass'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>

    )
}

export { App }