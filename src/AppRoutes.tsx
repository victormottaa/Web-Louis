import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/home";
import Work from "./Pages/Work/work"


export function AppRouter() {
    return(
        <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home/>} />
    </Routes>

    <Routes>
            <Route path="/work" element={<Work/>}/>
    </Routes>
        </BrowserRouter>
    )
}


export default AppRouter