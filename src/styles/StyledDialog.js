import styled from "styled-components";

export const StyledDialog = styled.dialog`
    
    max-width: 369px;
    max-height: 342px;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background-color: transparent;
    border-radius: 4px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    header{
        background-color: var(--grey-2);
        padding: 12px 20px;

        h2{
            color: var(--grey-0);
            font-weight: var(--weight-700);
            font-size: var(--font-14);
        }

        button{
            color: var(--grey-1);
            background-color: transparent;
            border: none;
            font-size: var(--font-16);
            font-weight: var(--weight-600);
            cursor: pointer;
        }
    }

    form{
        padding: 20px 20px;
        gap: 20px;
        background-color: var(--grey-3);
        height: 100%;

        label{
            color: var(--grey-0);
            font-weight: var(--weight-400);
            font-size: var(--font-12);
        }

        input,select{
            height: 50px;
            padding: 0 16px;
            background-color: var(--grey-2);
            color: var(--grey-0);
            outline: none;
            border: 1px solid var(--grey-0);
            border-radius: 4px;
            font-size: var(--font-16);
        }

        button{
            height: 50px;
            background-color: var(--primary-color);
            border-radius: 4px;
            border: none;
            color: var(--white);
            font-size: var(--font-16);
            font-weight: var(--weight-500);
        }

        button:hover{
            background-color: var(--primary-color-focus);
            cursor: pointer;
        }
    }

`