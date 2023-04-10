import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { Input } from "../input";
import { formSchemaLogin } from "./formSchemaLogin";

export const FormLogin = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getAllUsers() {
            const response = await api.get('/users')
            console.log(response)
            setUsers(response.data)
        }
        getAllUsers()
    }, [])





    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchemaLogin)
    });



    const submit = (formData) =>{
        const userFound = users.find(user => user.name === formData.name)
        console.log(userFound)
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Login</h2>
                <Input label="Email" type="email" register={register('email')} />
                {errors.email ? <p>{errors.email.message}</p> : null}
                <Input label="Senha" type="password" register={register('password')} />
                {errors.password ? <p>{errors.password.message}</p> : null}

                <button type="submit">Entrar</button>
            </form>

            <p>Ainda não possui uma conta?</p>
            <Link to='/register'>Cadastre-se</Link>
        </>
    )
}