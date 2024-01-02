import React from 'react';
import styled from 'styled-components';
import { ActionButton } from '../Button/ActionButton';
import { Theme } from '../../themes/Theme';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
        <ModalContent>
            <ContentSection>
                <h1>Test</h1>
            </ContentSection>
            <ButtonSection>
                <ActionButton onClick={onClose}>Confirmar</ActionButton>
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
`;

const ContentSection = styled.div`
    flex-grow: 1;
    padding: 10px 30px;
`;

const ButtonSection = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-right: 10px;
`;