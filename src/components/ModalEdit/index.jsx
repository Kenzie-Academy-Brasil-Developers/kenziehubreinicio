import { useState } from "react"
import { StyledDialog } from "../../styles/StyledDialog"
import { InputDefault } from "../Input"

export const ModalEditTechnology = ({ technology, showModal, setShowModal, handleEdit, handleDelete, setSelectedTechnology }) => {
  const [description, setDescription] = useState(technology.description)
  const [status, setStatus] = useState(technology.status)

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
    handleDelete(technology.id)
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
