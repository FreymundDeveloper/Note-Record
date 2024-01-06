import React from 'react';
import styled from 'styled-components';
import { ContainerTopic, CardMain } from '../../components';

interface CardProps {
    id: string;
    details: Array<{ discipline: string; createdData: string; note: string }>;
}

interface ContainerCardProps {
    cardProps: CardProps;
    onCardButtonClick: (containerId: string, index: number) => void;
    onButtonClick: (id: string) => void;
}

export const ContainerCard: React.FC<ContainerCardProps> = ({ cardProps, onCardButtonClick, onButtonClick }) => {
    const { id, details } = cardProps;

    const hasValidNotes = details.some(detail => detail.note !== '');

    return (
        <Container>
            <ContainerTopic content={"Bimestre " + id} cardText={"Lançar Nota"} onButtonClick={() => onButtonClick(id)} />
            {hasValidNotes && (
                <CardsContainer>
                    {details.map((detail, index) => (
                        <CardMain key={index} title={detail.discipline} data={detail.createdData} note={detail.note} id={id}
                            onButtonClick={() => onCardButtonClick(id, index)} />
                    ))}
                </CardsContainer>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 548px) {
        flex-wrap: wrap;
  }
`;
