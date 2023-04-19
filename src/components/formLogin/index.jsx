import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../input";
import { formSchemaLogin } from "./formSchemaLogin";
import { StyledForm } from "../../styles/form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export const FormLogin = () => {

    const [loading, setLoading] = useState(false)

    const { signIn } = useContext(AuthContext)
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(formSchemaLogin),
    });

    return (
        <>
            <StyledForm 
            className="flex flex-column" 
            onSubmit={handleSubmit(signIn)}>

                <h2>Login</h2>

                <Input
                    label="Email"
                    id="email"
                    error={errors.email?.message}
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                />
                <Input
                    label="Senha"
                    id='password'
                    error={errors.password?.message}
                    type="password"
                    placeholder='Digite sua senha'
                    {...register('password')}
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>

                <p>Ainda não possui uma conta?</p>

                <Link to='/register'>Cadastre-se</Link>
            </StyledForm>
        </>
    )
}