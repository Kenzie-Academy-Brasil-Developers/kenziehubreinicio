
import Logo from "../../assets/logo.svg"
import { SectionUser } from "../../components/sectionUser"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { Navigate } from "react-router-dom"
import { StyledHeaderDash } from "../../styles/headerDash"


export const DashboardPage = ({userLogout}) =>{

    const {user, loading} = useContext(AuthContext);
   
    if (loading) {
        return <div>Carregando...</div>
    }

    if (!user) {
        return <Navigate to='/' />
    }
    
    return(
        <>
            <StyledHeaderDash>
                <div className="container flex flex-between header-dash">
                    <img src={Logo} alt="Kenzie Hub Logo" />
                    <a onClick={()=>(userLogout())}>Sair</a>
                </div>
            </StyledHeaderDash>
            <SectionUser>
                <div className="border-bottom border-top height container flex flex-row flex-between">
                    <h1>Olá {user.name}</h1>
                    <p>Primeiro módulo  Introdução ao Frontend</p>
                </div>
            </SectionUser>
            <SectionUser>
                <div className="flex flex-column">
                    <h2>Que pena! Estamos em desenvolvimento!</h2>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
                    
            </SectionUser>
        </>
    )
}