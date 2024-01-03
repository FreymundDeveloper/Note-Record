import React, { useEffect, useState } from 'react';
import { darken } from 'polished';
import styled from 'styled-components';
import { Title, InputNote } from '../../components'

interface CardModalProps {
    onCardClick: (value: number) => void;
    onClose: () => void;
    selectedCard: number;
    defaultSelectedCard?: number;
}

const CardColors = {
    1: 'biologyCard',
    2: 'artCard',
    3: 'geographyCard',
    4: 'sociologyCard',
};

export const CardModal: React.FC<CardModalProps> = ({ onCardClick, onClose, selectedCard, defaultSelectedCard = 1 }) => {
    const [inputValue, setInputValue] = useState<string>(defaultSelectedCard.toString());
    const [localSelectedCard, setLocalSelectedCard] = useState<number | null>(defaultSelectedCard);

    const handleCardClick = (value: number) => {
        setInputValue(value.toString());
        onCardClick(value);
        setLocalSelectedCard(value);
    };

    useEffect(() => {
        setInputValue(selectedCard.toString());
    }, [selectedCard]);

  return (
    <ContentContainer>
        <TitleContainer spaced={false}>
            <Title contentTitle={"Disciplina"} modeling={2} />
        </TitleContainer>
        <CardContainer>
            <Card color="biologyCard" onClick={() => handleCardClick(1)} isSelected={selectedCard === 1}><span>Biologia</span></Card>
            <Card color="artCard" onClick={() => handleCardClick(2)} isSelected={selectedCard === 2}><span>Artes</span></Card>
            <Card color="geographyCard" onClick={() => handleCardClick(3)} isSelected={selectedCard === 3}><span>Geografia</span></Card>
            <Card color="sociologyCard" onClick={() => handleCardClick(4)} isSelected={selectedCard === 4}><span>Sociologia</span></Card>
        </CardContainer>
        <TitleContainer spaced={true}>
            <Title contentTitle={"Nota"} modeling={3} />
        </TitleContainer>
        <InputNote value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
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

const TitleContainer = styled.div<{ spaced?: boolean }>`
    margin-top: ${(props) => (props.spaced ? '2px' : '40px')};
`;