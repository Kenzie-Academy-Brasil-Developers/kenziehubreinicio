import { HeaderPages } from "../../components/HeaderPages"
import Logo from "../../assets/logo.svg"
import { FormLogin } from "../../components/FormLogin"


export const LoginPage = ({ setUser }) => {


    return (
        <>
            <HeaderPages>
                <div className="container flex flex-center">
                    <img src={Logo} alt="Kenzie Hub Logo" />
                </div>
            </HeaderPages>
            <FormLogin setUser={setUser} />
        </>
    )
}