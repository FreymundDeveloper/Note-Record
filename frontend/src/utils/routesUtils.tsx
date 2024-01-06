export const adaptToEnglish = (dataArray: any[]) => {
    return reorderData(
        improveAdaptedData(
            dataArray.map(data => ({
            discipline: data.disciplina,
            createdData: data.criadoEm,
            note: data.nota,
        })))
    );
};

export const improveAdaptedData = (adaptedDataArray: any[]) => {
    const emptyDetails = createEmptyDetails();

    for (let i = adaptedDataArray.length - 1; i >= 0; i--) {
        const adaptedDiscipline = adaptedDataArray[i].discipline;

        const emptyDetailIndex = emptyDetails.findIndex(detail => detail.discipline === adaptedDiscipline);

        if (emptyDetailIndex !== -1) {
            emptyDetails.splice(emptyDetailIndex, 1);
        }
    }

    adaptedDataArray.push(...emptyDetails);

    return adaptedDataArray;
};

export const reorderData = (dataArray: any[], order: string[] = ['BIOLOGIA', 'ARTES', 'GEOGRAFIA', 'SOCIOLOGIA']) => {
    const dataMap = new Map(dataArray.map(data => [data.discipline, data]));
    const reorderedDataArray: any[] = [];

    order.forEach(discipline => {
        const data = dataMap.get(discipline) || createEmptyDetails().find(detail => detail.discipline === discipline);
        if (data) {
            reorderedDataArray.push(data);
        }
    });

    return reorderedDataArray;
};

export const convertToNumber = (value: string | number): any => {
    if (typeof value === 'number') {
        return value;
    }

    const parsedValue = parseFloat(value as string);
    return isNaN(parsedValue) ? 0 : parsedValue;
};

export const maperBimester = (bimester: number) => {
    switch (bimester) {
        case 1:
            return "PRIMEIRO";
        case 2:
            return "SEGUNDO";
        case 3:
            return "TERCEIRO";
        case 4:
            return "QUARTO";
        default:
            return 1;
    }
};

export const createEmptyDetails = () => {
    return [
        {
            discipline: 'BIOLOGIA',
            createdData: '',
            note: '',
        },
        {
            discipline: 'ARTES',
            createdData: '',
            note: '',
        },
        {
            discipline: 'GEOGRAFIA',
            createdData: '',
            note: '',
        },
        {
            discipline: 'SOCIOLOGIA',
            createdData: '',
            note: '',
        },
    ];
};