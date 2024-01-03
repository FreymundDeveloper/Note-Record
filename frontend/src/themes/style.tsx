import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

export const GlobalStyles = createGlobalStyle<{ theme?: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    };
    
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: black;
        width: 1000px;
        border-radius: 8px;
        margin: 0 auto;
    }
    
    @media (max-width: 548px) {
        body {
            width: 400px;
        }
    }

`