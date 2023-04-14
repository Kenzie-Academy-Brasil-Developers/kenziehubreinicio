import { StyledHeader } from "../../styles/header"

export const HeaderPages = ({children}) =>{
    return(
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}