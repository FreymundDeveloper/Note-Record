import React, { useEffect, useState } from 'react';
import { darken } from 'polished';
import styled from 'styled-components';
import { Title, InputNote } from '../../components';

interface CardModalProps {
    onCardClick: (value: number) => void;
    selectedCard: number;
    currentNote: string;
    onInputChange?: (value: string) => void; // Nova propriedade para retornar o valor do inputValue
}

const CardColors = {
    1: 'biologyCard',
    2: 'artCard',
    3: 'geographyCard',
    4: 'sociologyCard',
};

export const CardModal: React.FC<CardModalProps> = ({ onCardClick, selectedCard, onInputChange, currentNote }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [localSelectedCard, setLocalSelectedCard] = useState<number | null>(selectedCard);

    const handleCardClick = (value: number) => {
        //setInputValue("");
        onCardClick(value);
        setLocalSelectedCard(value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (onInputChange) {
            onInputChange(value);
        }
    };

    useEffect(() => {
        setInputValue(currentNote)
    }, [currentNote]);

    return (
        <ContentContainer>
            <TitleContainer moreSpaced={false}>
                <Title contentTitle={"Disciplina"} modeling={2} />
            </TitleContainer>
            <CardContainer>
                <Card color={CardColors[1]} onClick={() => handleCardClick(1)} isSelected={selectedCard === 1}><span>Biologia</span></Card>
                <Card color={CardColors[2]} onClick={() => handleCardClick(2)} isSelected={selectedCard === 2}><span>Artes</span></Card>
                <Card color={CardColors[3]} onClick={() => handleCardClick(3)} isSelected={selectedCard === 3}><span>Geografia</span></Card>
                <Card color={CardColors[4]} onClick={() => handleCardClick(4)} isSelected={selectedCard === 4}><span>Sociologia</span></Card>
            </CardContainer>
            <TitleContainer moreSpaced={true}>
                <Title contentTitle={"Nota"} modeling={3} />
            </TitleContainer>
            <InputNote value={inputValue} onChange={handleInputChange} />
        </ContentContainer>
    );
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0px 0px 0px;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 0;

    @media (max-width: 548px) {
        flex-wrap: wrap;
    }
`;

const Card = styled.div<{ color: string; isSelected: boolean }>`
    cursor: pointer;
    width: 150px;
    height: 50px;
    border-radius: 16px;
    background-color: ${(props) => darken(0.4, props.theme.color[props.color])};
    transition: background-color 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
        color: white;
    }

    ${(props) =>
        props.isSelected &&
        `
        background-color: ${props.theme.color[props.color]};
    `}
`;

const TitleContainer = styled.div<{ moreSpaced?: boolean }>`
    margin-top: ${(props) => (props.moreSpaced ? '2px' : '40px')};
`;
