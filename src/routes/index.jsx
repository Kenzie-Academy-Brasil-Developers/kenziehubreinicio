import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { NotFoundPage } from "../pages/notFound"
import { RegisterPage } from "../pages/RegisterPage"
import { DashboardPage } from "../pages/DashboardPage"
import { useState } from "react"
import { ProtectedRoutes } from "../components/ProtectedRoutes"

export const RoutesMain = () => {

    const [user, setUser] = useState(null)


    return (
        <Routes>
            <Route path='/' element={<LoginPage setUser={setUser} />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<NotFoundPage />} />
            
            <Route element={<ProtectedRoutes />}>
                <Route path='/dashboard' element={<DashboardPage />} />
            </Route>

            
        </Routes>
    )
}
