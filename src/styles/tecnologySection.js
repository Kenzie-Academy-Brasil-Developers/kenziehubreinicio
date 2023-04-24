import styled from "styled-components";

export const StyledSectionTecnology = styled.section`
    
    background: var(--grey-3);
    padding: 23px 22px;

    li{
        background: var(--grey-4);
        padding: 13px 20px;
        cursor: pointer;

        h3{
            color: var(--white);
            font-weight: var(--weight-700);
            font-size: var(--font-14);
        }

        span{
            color: var(--grey-1);
            font-weight: var(--weight-400);
            font-size: var(--font-12);
        }
    }

    li:hover{
        background: var(--grey-2);
    }


`