import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./home"

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
           
        </Routes>
    </BrowserRouter>
)
