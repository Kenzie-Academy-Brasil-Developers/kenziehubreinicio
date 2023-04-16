import { HeaderPages } from "../../components/header"
import Logo from "../../assets/logo.svg"
import { FormRegister } from "../../components/FormRegister"
import { Link } from "react-router-dom"


export const RegisterPage = () => {

    return (
        <>
            <HeaderPages>
                <div className="flex flex-between">
                    <img src={Logo} alt="Kenzie Hub Logo" />
                    <Link to={'/'}>Voltar</Link>
                </div>
            </HeaderPages>
            <FormRegister />
        </>
    )
}