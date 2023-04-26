import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const ProtectedRoutes = () => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div>Carregando...</div>
    }

    if (!user && location.pathname !== '/') {
        return <Navigate to='/' state={location} />
    }

    if (user && location.pathname === '/') {
        return <Navigate to='/dashboard' />
    }

    if (user && (location.pathname === "/" || location.pathname === "/register")) {
        return <Navigate to='/dashboard' />
    }

    return <Outlet />
}