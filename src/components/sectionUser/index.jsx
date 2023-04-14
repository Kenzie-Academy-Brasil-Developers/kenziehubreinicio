import { StyledSection } from "../../styles/section"

export const SectionUser = ({children}) =>{
    return(
        <StyledSection className='container flex flex-row flex-between'>
            {children}
        </StyledSection>
    )
}