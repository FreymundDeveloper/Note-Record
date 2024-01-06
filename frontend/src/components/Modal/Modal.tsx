import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonAction, Title, CardModal, ButtonClose, Tooltip } from '../../components'
import { convertToNumber, maperBimester } from '../../utils/routesUtils';
import axios from 'axios';

interface Detail {
    discipline: string;
    note: string;
  }

interface ModalProps {
    isOpen: boolean;
    content: any;
    bimester: number
    userSelectedCard?: number;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, content, userSelectedCard = 1, onClose, bimester }) => {
    const [selectedCard, setSelectedCard] = useState<number>(userSelectedCard);
    const [currentNote, setCurrentNote] = useState<string>("");
    const realNote = content[bimester - 1]?.details[selectedCard - 1]?.note;
    const realDicipline = content[bimester - 1]?.details[selectedCard - 1]?.discipline;
    const realBimester = maperBimester(bimester);

    useEffect(() => {
        if (selectedCard !== userSelectedCard) setSelectedCard(userSelectedCard);
    }, [userSelectedCard, content]);

    const handleSaveNote = () => {//<-N adiciona a comb
        const existingData: Detail[] = content[bimester - 1]?.details || [];

        const isCombinationDuplicate = existingData.some(
        (entry) => entry?.discipline === realDicipline && entry?.note !== ''
        );

        if (isCombinationDuplicate) {
            console.error('Error: Bimestre and Discipline combination already exists with a registered note.');
            return;
        }

        axios.post('http://localhost:3001/results', {
            bimestre: realBimester,
            disciplina: realDicipline,
            nota: currentNote,
        })
        .then(response => {
            console.log('Note save:', response.data);
            setCurrentNote("")
        })
        .catch(error => {
            console.error('Errot to save note:', error);
        });
    };

    const handleCardClick = (value: number) => {
        setSelectedCard(value);
    };

    const handleConfirmClick = () => {
        handleSaveNote()
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

    const handleInputChange = (value: string) => {
        setCurrentNote(convertToNumber(value));
        console.log(currentNote)
        console.log("Foi")
    };

  return (
    <ModalOverlay isOpen={isOpen}>
        <ModalContent>
            <ContentSection>
                <TitleContainer>
                    <Title contentTitle={`Bimestre ${bimester}`} modeling={1} />
                    <Tooltip text="Fechar"><ButtonClose onClose={handleCloseClick} /></Tooltip>
                </TitleContainer>
                <CardModal onCardClick={handleCardClick} selectedCard={selectedCard} onInputChange={handleInputChange} currentNote={realNote} />
            </ContentSection>
            <ButtonSection>
                <Tooltip text="Salvar Nota"><ButtonAction onClick={handleConfirmClick} sized={'modal'}>Confirmar</ButtonAction></Tooltip>
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