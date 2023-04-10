import { HeaderPages } from "../../components/header"
import Logo from "../../assets/logo.svg"
import { FormLogin } from "../../components/formLogin"


export const LoginPage = () =>{
    
    return(
        <>
            <HeaderPages>
            <img src={Logo} alt="Kenzie Hub Logo" />
            </HeaderPages>
            <FormLogin />
        </>
    )
}