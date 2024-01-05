import axios from 'axios';

export const fetchDataForBimester = async (bimester: string) => {
    try {
        const bimesterNumber = mapBimesterStringToNumber(bimester);
        const response = await axios.get(`http://localhost:3001/results?bimester=${bimester}`);
        const formattedData = {
            id: bimesterNumber,
            details: adaptToEnglish(response.data),
        };

        return formattedData;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return null;
    }
};

export const adaptToEnglish = (dataArray: any[]) => {
    return dataArray.map(data => ({
        discipline: data.disciplina,
        createdData: data.criadoEm,
        note: data.nota,
    }));
};

export const mapBimesterStringToNumber = (bimester: string) => {
    switch (bimester) {
        case "PRIMEIRO":
            return 1;
        case "SEGUNDO":
            return 2;
        case "TERCEIRO":
            return 3;
        case "QUARTO":
            return 4;
        default:
            return 1;
    }
};

export const createEmptyDetails = () => {
    return [
        {
            discipline: 'Biologia',
            createdData: '',
            note: '',
        },
        {
            discipline: 'Artes',
            createdData: '',
            note: '',
        },
        {
            discipline: 'Geografia',
            createdData: '',
            note: '',
        },
        {
            discipline: 'Sociologia',
            createdData: '',
            note: '',
        },
    ];
};