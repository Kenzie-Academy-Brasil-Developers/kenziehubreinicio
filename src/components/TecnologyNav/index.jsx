import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from "../../providers/AuthProvider"
import { api } from "../../services/api"
import { StyledDialog } from "../../styles/StyledDialog"
import { TecnologyTitleStyled } from "../../styles/TecnologyTitleStyled"
import { StyledSectionTecnology } from "../../styles/tecnologySection"
import { InputDefault } from "../Input"
import { ListTecnologys } from "../ListTecnologys"
import { useState, useRef, useContext } from "react"


export const SectionTecnology = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { technologys, setTechnologys } = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('Iniciante')

    const modalRef = useRef()


    const handleUpdateTechnologies = (newTechnologies) => {
        setTechnologys(newTechnologies)
    }


    const token = localStorage.getItem("kenziehub:token")

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



    return (
        <>
            <section className="container">
                <TecnologyTitleStyled className="flex flex-row flex-between">
                    <h2>Tecnologias</h2>
                    <button
                        aria-label="Adicionar tecnologia"
                        onClick={() => setIsModalOpen(true)}
                    >
                        +
                    </button>
                </TecnologyTitleStyled>
                <StyledSectionTecnology className="flex flex-column">
                    <ListTecnologys
                        technologys={technologys}
                        handleUpdateTechnologies={handleUpdateTechnologies}
                    />
                </StyledSectionTecnology>
                {isModalOpen && (
                    <StyledDialog open={true} onClick={handleModalClick}>
                        <div className="modal-content">
                            <header className="flex flex-row flex-between">
                                <h2>Cadastrar Tecnologia</h2>
                                <button
                                    aria-label="Fechar modal"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    X
                                </button>
                            </header>
                            <form className="flex flex-column" ref={modalRef} onSubmit={handleAddTechnology}>
                                <InputDefault
                                    label="Nome"
                                    id="name"
                                    type="text"
                                    placeholder="Digite a tecnologia"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <label>Selecionar Status</label>
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>

                                <button type="submit">Cadastrar Tecnologia</button>
                            </form>
                        </div>
                    </StyledDialog>
                )}
            </section>
        </>
    )
}