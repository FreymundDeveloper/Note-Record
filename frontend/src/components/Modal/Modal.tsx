import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonAction, Title, CardModal, ButtonClose } from '../../components'
//import { Theme } from '../../themes/Theme';

interface ModalProps {
    isOpen: boolean;
    content: string;
    userSelectedCard?: number;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, content, userSelectedCard = 1, onClose }) => {
    const [selectedCard, setSelectedCard] = useState<number>(userSelectedCard);

    useEffect(() => {
        if (selectedCard !== userSelectedCard) setSelectedCard(userSelectedCard);
    }, [userSelectedCard]);

    const handleCardClick = (value: number) => {
        setSelectedCard(value);
    };

    const handleConfirmClick = () => {
        if (selectedCard < 4) {
            handleCardClick(selectedCard ? selectedCard + 1 : 1);
        } else {
            handleCloseClick();
        }
    };

    const handleCloseClick = () => {
        setSelectedCard(userSelectedCard);
        onClose();
    };

  return (
    <ModalOverlay isOpen={isOpen}>
        <ModalContent>
            <ContentSection>
                <TitleContainer>
                    <Title contentTitle={content} modeling={1} />
                    <ButtonClose onClose={handleCloseClick} />
                </TitleContainer>
                <CardModal onCardClick={handleCardClick} onClose={onClose} selectedCard={selectedCard} defaultSelectedCard={selectedCard}></CardModal>
            </ContentSection>
            <ButtonSection>
                <ButtonAction onClick={handleConfirmClick} sized={'modal'}>Confirmar</ButtonAction>
            </ButtonSection>
        </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    background: ${(props) => props.theme.color.modalColor};
    max-width: 700px;
    max-height: 350px;
    width: 100%;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: 548px) {
        max-width: 380px;
        max-height: 400px;
    }
`;

const ContentSection = styled.div`
    flex-grow: 1;
    padding: 10px 30px;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;

const ButtonSection = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-right: 10px;
`;