import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #E5E5E5;
        --card-background: radial-gradient(73.06% 104.31% at 14.59% 58.06%, #5A7589 0%, #436175 33.7%, #315266 57.29%, #124768 100%);
        --primary: #4BDE95;
        --confirm-button: #308E5F;

        --text-light: #FFFFFF;
        --text-dark: #3C3C3C;

        --input-color: #C6C6C6;

    }
    


    *,
    *::after,
    *::before {
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: var(--background);
        
    }

    body, input, textarea, button {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        transition: all 0.2s;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    
`;
