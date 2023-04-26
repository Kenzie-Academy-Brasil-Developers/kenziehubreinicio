
import Logo from "../../assets/logo.svg"
import { SectionUser } from "../../components/SectionUser"
import { StyledHeaderDash } from "../../styles/headerDash"
import { SectionTecnology } from "../../components/TecnologyNav"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"


export const DashboardPage = () => {

    const { signOut, user } = useContext(AuthContext)

    return (
        <>
            <StyledHeaderDash>
                <div className="container flex flex-between header-dash">
                    <img src={Logo} alt="Kenzie Hub Logo" />
                    <a onClick={() => (signOut())}>Sair</a>
                </div>
            </StyledHeaderDash>
            <SectionUser>
                <div className="border-bottom border-top height container flex flex-row flex-between">
                    <h1>Olá {user.name}</h1>
                    <p>Primeiro módulo  Introdução ao Frontend</p>
                </div>
            </SectionUser>

            <SectionTecnology />
        </>
    )
}