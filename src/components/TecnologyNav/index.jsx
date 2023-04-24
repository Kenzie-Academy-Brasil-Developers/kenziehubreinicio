import { StyledDialog } from "../../styles/StyledDialog";
import { TecnologyTitleStyled } from "../../styles/TecnologyTitleStyled"
import { StyledSectionTecnology } from "../../styles/tecnologySection"
import { Input } from "../input";
import { ListTecnologys } from "../listTecnologys"
import { useState } from "react";

export const SectionTecnology = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-column container">
                <TecnologyTitleStyled className="flex flex-row flex-between">
                    <h2>Tecnologias</h2>
                    <button onClick={() => setIsModalOpen(true)}>+</button>
                </TecnologyTitleStyled>
                <StyledSectionTecnology className="flex flex-column">
                    <ul>
                        <ListTecnologys />
                    </ul>
                </StyledSectionTecnology>
                {isModalOpen && (
                    <StyledDialog open={true}>
                        <header className="flex flex-row flex-between">
                            <h2>Cadastrar Tecnologia</h2>
                            <button onClick={() => setIsModalOpen(false)}>X</button>
                        </header>
                        <form className="flex flex-column">
                            <Input
                                label="Nome"
                                id="name"
                                type="text"
                                placeholder="Digite a tecnologia"
                            />
                            <label htmlFor="course_module">Selecionar Status</label>
                            <select>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>

                            <button>Cadastrar Tecnologia</button>
                        </form>
                    </StyledDialog>
                )}
            </div>
        </>
    )
}