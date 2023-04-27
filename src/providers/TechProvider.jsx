import { createContext, useContext, useState } from "react"
import { AuthContext } from "./AuthProvider"
import { api } from "../services/api"
import { toast } from "react-toastify"
import { useRef } from "react"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {


  const { technologys, setTechnologys } = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('Iniciante')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const token = localStorage.getItem("kenziehub:token")

  const handleUpdateTechnologies = (newTechnologies) => {
    setTechnologys(newTechnologies)
  }


  const modalRef = useRef()

  const handleModalClick = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) {
      return
    }
    setIsModalOpen(false)
  }


  const handleAddTechnology = async (e) => {
    e.preventDefault()
    const newTechnology = {
      title: title,
      status: status
    }
    try {
      const response = await api.post("/users/techs", newTechnology, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const updatedTechs = [...technologys, response.data]
      setTechnologys(updatedTechs)
      handleUpdateTechnologies(updatedTechs)

      setIsModalOpen(false)

      toast.success('Tecnologia adicionada com sucesso!')
    } catch (error) {
      console.error(error)
      toast.error('Erro ao adicionar tecnologia!')
    }
  }

  const handleRemoveTechnology = async (id) => {
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const updatedTechs = technologys.filter(t => t.id !== id)
      setTechnologys(updatedTechs)
      toast.success('Tecnologia removida com sucesso!')
    } catch (error) {
      console.error(error)
      toast.error('Erro ao remover tecnologia!')
    }
  }

  const handleEdit = async (id, data) => {
    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const updatedTechs = technologys.map((tech) => {
        if (tech.id === id) {
          tech = response.data
        }
        return tech
      })

      setTechnologys(updatedTechs)
      setShowModal(false)
      toast.success("Tecnologia atualizada com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao atualizar tecnologia!")
    }
  }

 
  return (
    <TechContext.Provider value={{ showModal, setShowModal,handleEdit,handleRemoveTechnology, handleAddTechnology, title, setTitle, status, setStatus, isModalOpen, setIsModalOpen, handleModalClick, handleUpdateTechnologies, modalRef, technologys, setTechnologys }}>
      {children}
    </TechContext.Provider>
  )
}