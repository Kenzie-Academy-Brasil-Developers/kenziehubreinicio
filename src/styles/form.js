import styled from "styled-components";

export const StyledForm = styled.form`

    background: var(--grey-3);
    color: var(--grey-0);
    padding: 15px;
    gap: 10px;
    width: 90%;
    margin: 0 auto;

    h2{
        text-align: center;
        font-weight: var(--weight-700);
        margin-bottom: 10px;
    }

    label{
        font-size: var(--font-12);
        font-weight: var(--weight-400);
    }

    input,select{
        border-radius: var(--global-radius);
        height: 45px;
        padding: 0 10px;
        outline: none;
        background: var(--grey-2);
        border: none;
        color: var(--grey-1);
        font-size: var(--font-16);
        font-weight: var(--weight-400);
    }

    input:focus,
    select:focus{
        color: var(--white);
    }

    button{
        margin-top: 10px;
        margin-bottom: 34px;
        padding: 10px 0;
        font-size: var(--font-16);
        font-weight: var(--weight-500);

        background: var(--primary-color);
        border-radius: var(--global-radius);
        border: none;
        outline: none;
        color: var(--white);
    }

    button:hover{
        background: var(--primary-color-focus);
        cursor: pointer;
    }

    p{
        font-size: var(--font-12);
        text-align: center;
        color: var(--grey-1);
        
    }

    a{
        text-align: center;
        width: 100%;
        background: var(--grey-1);
        font-size: var(--font-16);
        font-weight: var(--weight-500);
        color: var(--white);
        padding: 10px 0;
        margin-top: 20px;
        border-radius:var(--global-radius) ;
    }

    span{
        font-size: var(--font-12);
        color: var(--primary-color-focus);
    }

    @media(min-width:1024px){
        max-width: 370px;
        width: 100%;
        margin: 0 auto;
    }
    
`