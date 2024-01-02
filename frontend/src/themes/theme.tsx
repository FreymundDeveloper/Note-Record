import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = '#000000',
    modalColor = '#2b2b2b',
    buttonColor = '#fffb00',
    biologyCard = '#ff00ea',
    artCard = '#00ccff',
    geographyCard = '#ff8800',
    sociologyCard = '#7700ff';

const theme = {
    color: {
        bodyColor,
        modalColor,
        buttonColor,
        biologyCard,
        artCard,
        geographyCard,
        sociologyCard,
    }
}

export type ThemeType = typeof theme;

interface Props {
    children?: React.ReactNode;
  }

export const Theme: React.FC<Props> = ( { children } ) => {
    return (
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    );
}