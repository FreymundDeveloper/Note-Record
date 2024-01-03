import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonCloseProps {
    onClose: () => void;
}

export const ButtonClose: React.FC<ButtonCloseProps> = ({ onClose }) => {
  return (
    <CloseButton onClick={onClose}>
        <span>&times;</span>
    </CloseButton>
  );
};

const CloseButton = styled.button`
    background-color: ${(props) => props.theme.color.modalColor};
    border: none;
    font-size: 3rem;
    cursor: pointer;
    color: white;
    font-weight: 100;
    padding: 0px 10px;
    border-radius: 12px;

    &:hover {
        background-color: ${(props) => darken(0.1, props.theme.color.modalColor)};
    }

    span {
        height: 10px;
    }
`;
