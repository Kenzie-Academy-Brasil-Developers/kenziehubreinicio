import React, { useState, useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { ModalEditTechnology } from "../ModalEdit"
import "react-toastify/dist/ReactToastify.css"
import { TechContext } from "../../providers/TechProvider"

export const ListTecnologys = () => {

  const { technologys } = useContext(AuthContext)

  const { setShowModal } = useContext(TechContext)

  const [selectedTechnology, setSelectedTechnology] = useState(null)


  const handleOpenModal = (technology) => {
    setSelectedTechnology(technology)
    setShowModal(true)
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
          setSelectedTechnology={setSelectedTechnology}
        />
      )}
    </>
  )
}