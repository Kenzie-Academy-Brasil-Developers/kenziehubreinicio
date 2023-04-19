import { Route, Routes, useNavigate } from "react-router-dom"
import { LoginPage } from "../pages/login"
import { NotFoundPage } from "../pages/notFound"
import { RegisterPage } from "../pages/register"
import { DashboardPage } from "../pages/dashboard"
import { useState } from "react"

export const RoutesMain = () => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem('kenziehub:token')
        navigate('/')
    }

    return (
        <Routes>
            <Route path='/' element={<LoginPage setUser={setUser} />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage userLogout={userLogout} />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}
