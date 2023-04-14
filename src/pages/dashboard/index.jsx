import { HeaderPages } from "../../components/header"
import Logo from "../../assets/logo.svg"
import { SectionUser } from "../../components/sectionUser"
import { useEffect } from "react"
import { api } from "../../services/api"
import { Link, useParams } from "react-router-dom"


export const DashboardPage = () =>{

    const {id} = useParams();
    // console.log(id)
    
    useEffect(() =>{
        async function getUsers() {
           const response = await api.get('/users')
        //    console.log(response.data)
        }

        getUsers()
    },[])


    return(
        <>
            <HeaderPages>
                <div className="container flex flex-between">
                    <img src={Logo} alt="Kenzie Hub Logo" />
                    <Link to={'/'}>Sair</Link>
                </div>
            </HeaderPages>
            <SectionUser>
                <h1>Olá Joao</h1>
                <p>Primeiro módulo  Introdução ao Frontend</p>
            </SectionUser>
        </>
    )
}