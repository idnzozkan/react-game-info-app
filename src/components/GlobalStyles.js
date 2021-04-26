import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #ff7474;
        }

        &::-webkit-scrollbar-track {
            background-color: #232327;
        }

    }

    body {
        background: rgb(26,26,29);
        background: linear-gradient(90deg, rgba(26,26,29,1) 0%, rgba(48,48,54,1) 100%);
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 3rem;
        font-family: 'Anton', sans-serif;
        font-weight: lighter;
        letter-spacing: 0.1rem;
        word-spacing: 0.5rem;
        color: #ff7474;
    }

    h3 {
        font-size: 1.3rem;
        color: #c56978;
        padding: 1.5rem 0rem;
    }

    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #999fbb;
        padding-bottom: 1.5rem;
    }

    a {
        text-decoration: none;
        color: #3D63FF;
    }

    img {
        display: block;
    }

    input {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }
`;

export default GlobalStyles;
