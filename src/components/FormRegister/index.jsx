import { useForm } from "react-hook-form"
import { Input } from "../input"
import {zodResolver} from "@hookform/resolvers/zod"
import { formSchemaRegister } from "./formSchemaRegister"



export const FormRegister = () => {

    const {register, handleSubmit, formState: {errors}} =  useForm({
        resolver: zodResolver(formSchemaRegister),
    })

    const handleRegister = (data) =>{
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleRegister)}>
            <div className="header--form">
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
            </div>
            <Input 
            label='Nome'
            id='nome'
            error={errors.name?.message}
            type='text'
            placeholder='Digite seu nome'
            {...register('name')}
            />

            <Input 
            label='Email'
            id='email'
            error={errors.email?.message}
            type='email'
            placeholder='Digite seu email'
            {...register('email')}
            />

             <Input 
            label='Senha'
            id='password'
            error={errors.password?.message}
            type='password'
            placeholder='Digite sua senha'
            {...register('password')}
            />

            <Input 
            label='Confirme sua senha'
            id='confirm_password'
            error={errors.confirm?.message}
            type='password'
            placeholder='Confirme sua senha'
            {...register('password')}
            />

            <Input 
            label='Bio'
            id='bio'
            error={errors.bio?.message}
            type='text'
            placeholder='Fale sobre você'
            {...register('bio')}
            />

            <Input 
            label='Opção de contato'
            id='contact'
            error={errors.contact?.message}
            type='text'
            placeholder='Opção de contato'
            {...register('contact')}
            />

            <label htmlFor="course_module">Selecione módulo</label>
            <select {...register('course_module')} >
                <option disabled>selecionar</option>
                <option value="primeiroModulo">Primeiro modulo</option>
                <option value="segundoModulo">Segundo modulo</option>
                <option value="terceiroModulo">Terceiro modulo</option>
            </select>
            <p>{errors.course_module?.message}</p>

            <button>Cadastrar</button>
        </form>
    )
}