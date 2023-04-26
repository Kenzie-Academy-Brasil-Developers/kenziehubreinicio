import { useForm } from "react-hook-form"
import { InputDefault } from "../input"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaRegister } from "./formSchemaRegister"
import { StyledForm } from "../../styles/form"
import { api } from "../../services/api"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


export const FormRegister = () => {

  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchemaRegister),
  })

  const navigate = useNavigate()

  const userRegister = async (formData) => {
    try {
      setLoading(true)
      const { data } = await api.post("users", formData)
      setLoading(false)
      toast.success("Cadastro realizado!")
    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error("Erro ao realizar cadastro!")
    }
  }

  const handleRegister = (data) => {
    userRegister(data)
  }
  return (
    <>
      <ToastContainer />
      <StyledForm className="flex flex-column" onSubmit={handleSubmit(handleRegister)}>

        <div>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <InputDefault
          label="Nome"
          id="name"
          error={errors.name?.message}
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />

        <InputDefault
          label="Email"
          id="email"
          error={errors.email?.message}
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />

        <InputDefault
          label="Senha"
          id="password"
          error={errors.password?.message}
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />

        <InputDefault
          label="Confirme sua senha"
          id="confirm_password"
          error={errors.confirm_password?.message}
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirm_password")}
        />

        <InputDefault
          label="Bio"
          id="bio"
          error={errors.bio?.message}
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />

        <InputDefault
          label="Opção de contato"
          id="contact"
          error={errors.contact?.message}
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />

        <label htmlFor="course_module">Selecione módulo</label>
        <select {...register("course_module")}>
          <option disabled>selecionar</option>
          <option value="primeiroModulo">Primeiro modulo</option>
          <option value="segundoModulo">Segundo modulo</option>
          <option value="terceiroModulo">Terceiro modulo</option>
        </select>
        <p>{errors.course_module?.message}</p>

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

      </StyledForm>
    </>
  )
}