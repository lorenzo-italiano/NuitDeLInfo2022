import {Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import MiniJeux from "../pages/MiniJeux/MiniJeux";

function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/minijeux" element={<MiniJeux />} />
            <Route path="/*" element={<ErrorPage errorMessage="Error 404"/>} />
            <Route path="/error/" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router
