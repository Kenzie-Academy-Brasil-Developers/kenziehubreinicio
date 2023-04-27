import { useState } from "react"
import { StyledDialog } from "../../styles/StyledDialog"
import { InputDefault } from "../Input"
import { TechContext } from "../../providers/TechProvider"
import { useContext } from "react"

export const ModalEditTechnology = ({ technology, setSelectedTechnology }) => {
  
  const { handleRemoveTechnology, handleEdit, status, setStatus,setShowModal,showModal} = useContext(TechContext)
  
  const [description, setDescription] = useState(technology.description)

  const handleClose = () => {
    setDescription(technology.description)
    setStatus(technology.status)
    setShowModal(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleEdit(technology.id, { description, status })
    setShowModal(false)
  }


  const handleDeleteClick = () => {
    handleRemoveTechnology(technology.id)
    setSelectedTechnology(null)
  }


  return (
    <>
      {showModal && (
        <StyledDialog>
          <div className="modal-content">
            <header className="flex flex-row flex-between">
              <h2>Tecnologia detalhes</h2>
              <button onClick={() => handleClose(false)}>
                X
              </button>
            </header>
            <form className="flex flex-column" onSubmit={handleSubmit}>
              <InputDefault
                label="Nome do projeto"
                id="name"
                type="text"
                placeholder="Editar material"
                value={technology.title}
                readOnly
              />
              <label>Selecione status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <div className="buttons-form flex flex-row">
                <button type="submit">Salvar alterações</button>
                <button onClick={handleDeleteClick}>Excluir</button>
              </div>
            </form>
          </div>
        </StyledDialog>
      )}
    </>
  )
}
