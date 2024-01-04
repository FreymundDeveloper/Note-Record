import React from 'react';
import styled from 'styled-components';
import { ContainerTopic, CardMain } from '../../components';

interface CardProps {
    id: string;
    details: Array<{ discipline: string; createdData: string; note: string }>;
}

interface ContainerCardProps {
    cardProps: CardProps;
    onCardButtonClick: (index: number) => void;
    onClearNote: (index: number) => void;
    onButtonClick: () => void;
}

export const ContainerCard: React.FC<ContainerCardProps> = ({ cardProps, onCardButtonClick, onClearNote, onButtonClick }) => {
    const { id, details } = cardProps;

    return (
        <Container>
            <ContainerTopic content={"Bimestre " + id} cardText={"Lançar Nota"} onButtonClick={onButtonClick} />
            <CardsContainer>
                {details.map((detail, index) => (
                    <CardMain key={index} title={detail.discipline} data={detail.createdData} note={detail.note}
                        onButtonClick={() => onCardButtonClick(index)} clearNote={() => onClearNote(index)} />
                ))}
            </CardsContainer>
        </Container>
    );
};

const Container = styled.div``;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;
