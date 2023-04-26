import React, { useState, useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { ModalEditTechnology } from "../ModalEdit"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ListTecnologys = () => {

  const { technologys, setTechnologys } = useContext(AuthContext)
  
  const [selectedTechnology, setSelectedTechnology] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const token = localStorage.getItem("kenziehub:token")

  const handleOpenModal = (technology) => {
    setSelectedTechnology(technology)
    setShowModal(true)
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

  return (
    <>
      <ul className="gap-15 flex flex-column">
        {technologys.map((technology) => (
          <li
            key={technology.id}
            className="flex flex-row flex-between"
            onClick={() => handleOpenModal(technology)}
          >
            <h3>{technology.title}</h3>
            <span>{technology.status}</span>
          </li>
        ))}
      </ul>
      {selectedTechnology && (
        <ModalEditTechnology
          technology={selectedTechnology}
          showModal={showModal}
          setShowModal={setShowModal}
          handleEdit={handleEdit}
          handleDelete={handleRemoveTechnology}
          setSelectedTechnology={setSelectedTechnology}
        />
      )}
    </>
  )
}