import styled, { css } from "styled-components";

export const StyledHeader = styled.header`

    padding: 30px 0;

    div{
        width: 90%;
        margin: 0 auto;
    }

    a{
        height: 40px;
        padding: 10px 15px;
        background: var(--grey-3);
        color: var(--grey-0);
        font-size: var(--font-12);
        font-weight: var(--weight-600);
        border-radius: var(--global-radius)
    }

    @media(min-width:1024px){
        max-width: 370px;
        width: 100%;
        margin: 0 auto;
    }


    ${({pageType})=>{
        if(pageType === 'dashboard'){
            return css`
                @media(min-width:1024px){
                    width: 90%;
                    margin: 0 auto;
                }
            `
        }
    }}


`