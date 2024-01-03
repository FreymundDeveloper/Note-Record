import { ThemeType } from '../themes/Theme';

export const getCardColor = (title: string, themes: ThemeType) => {
    switch (title) {
        case 'Biologia':
            return themes.color.biologyCard;
        case 'Artes':
            return themes.color.artCard;
        case 'Geografia':
            return themes.color.geographyCard;
        case 'Sociologia':
            return themes.color.sociologyCard;
        default:
            return themes.color.biologyCard;
    }
};
