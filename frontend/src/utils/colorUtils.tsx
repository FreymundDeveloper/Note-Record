import { ThemeType } from '../themes/Theme';

export const getCardColor = (title: string, themes: ThemeType) => {
    switch (title) {
        case 'BIOLOGIA':
            return themes.color.biologyCard;
        case 'ARTES':
            return themes.color.artCard;
        case 'GEOGRAFIA':
            return themes.color.geographyCard;
        case 'SOCIOLOGIA':
            return themes.color.sociologyCard;
        default:
            return themes.color.biologyCard;
    }
};
