import './assets/css/page.css'
import './assets/css/nav.css'

import Home from "./pages/Home.jsx";
import Overview from "./pages/Overview.jsx";
import Nav from "./components/Nav.jsx";
import Countries from "./pages/Countries.jsx";
import Architecture from "./pages/Architecture.jsx";
import Design from "./pages/Design.jsx";
import Infrastructure from "./pages/Infrastructure.jsx";
import FiveYears from "./pages/FiveYears.jsx";
import NoRoute from "./pages/NoRoute.jsx";

import {Routes, Route} from "react-router";
import {Suspense} from "react";

function App() {
    return (
        <>
            <Nav/>
            <div className="page">
                <Suspense fallback={<div className="container">Loading...</div>}>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/overview" element={<Overview />} />
                        <Route path="/countries" element={<Countries />} />
                        <Route path="/technical" element={<Architecture />} />
                        <Route path="/design" element={<Design />} />
                        <Route path="/other" element={<Infrastructure />} />
                        <Route path="/fiveyears" element={<FiveYears />} />
                        <Route path="*" element={<NoRoute />} />
                    </Routes>
                </Suspense>
            </div>
        </>
    )
}

export default App
