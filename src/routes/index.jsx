import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/login"
import { NotFoundPage } from "../pages/notFound"
import { RegisterPage } from "../pages/register"
import { DashboardPage } from "../pages/dashboard"

export const RoutesMain = () =>{
    return(
        
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            {/* <AuthProvider> */}
                <Route path='/dashboard/:id' element={<DashboardPage />} />
            {/* </AuthProvider> */}
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
      
    )
}