import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

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
        width: 300px;
        border-radius: 8px;
    }
    
    @media (max-width: 548px) {
        body {
            width: 80%;
            min-height: 200px;
        }
    }

`