import styled from "styled-components";

export const StyledDialog = styled.dialog`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);

    .modal-content {
        padding: 20px;
        border-radius: 5px;
        max-width: 342px;
        width: 100%;

    }

    header{
        background-color: var(--grey-2);
        padding: 12px 20px;
        border-radius: 5px 5px 0 0;
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
        border-radius: 0 0 5px 5px;
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

        .buttons-form{
            gap: 10px;

            button:first-of-type{
                width: 204px;
            }
            button:last-of-type{
                width: 98px;
                background-color: var(--grey-1);
                color: var(--white);
            }
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