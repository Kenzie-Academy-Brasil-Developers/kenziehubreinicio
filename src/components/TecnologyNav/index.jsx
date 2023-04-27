import 'react-toastify/dist/ReactToastify.css'
import { StyledDialog } from "../../styles/StyledDialog"
import { TecnologyTitleStyled } from "../../styles/TecnologyTitleStyled"
import { StyledSectionTecnology } from "../../styles/tecnologySection"
import { InputDefault } from "../Input"
import { ListTecnologys } from "../ListTecnologys"
import { useContext } from "react"
import { TechContext } from "../../providers/TechProvider"


export const SectionTecnology = () => {


    const { technologys, setTitle, handleAddTechnology,status,setStatus, isModalOpen, setIsModalOpen,handleModalClick,handleUpdateTechnologies,modalRef } = useContext(TechContext)


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