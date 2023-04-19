import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary-color: #FF577F;
        --primary-color-focus:#FF427F;
        --secondary-color-negative: #59323F;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --white: #ffffff;

        --font-26: 1.625rem;
        --font-18: 1.125rem;
        --font-16: 1rem;
        --font-14: 0.875rem;
        --font-12: 0.75rem;

        --weight-700: 700;
        --weight-600: 600;
        --weight-500: 500;
        --weight-400: 400;

        --global-radius: 4px;
    }


   a{
    text-decoration: none;
   }

    .container{
        max-width:1000px;
        width: 90%;
        margin: 0 auto;
    }

    .flex {
    display: flex;
    }

    .flex-row {
        flex-direction: row;
    }

    .flex-between {
        justify-content: space-between;
    }

    .flex-center{
        justify-content: center;
    }

    .flex-column {
        flex-direction: column;
    }

    body{
        background: var(--grey-4);
        font-family: 'Inter', sans-serif;
    }

    .border-bottom{
        border-bottom: 1px solid var(--grey-3);
    }

    .border-top{
        border-top: 1px solid var(--grey-3);
    }

    .height{
        height: 100%;
        padding-top: 25px;
        padding-bottom: 25px;
        width: 100%;
    }

`