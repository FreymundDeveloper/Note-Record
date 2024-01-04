import React from 'react';
import styled from 'styled-components';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '../../components';

interface ButtonDeleteProps {
    onClick: () => void;
}

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({ onClick }) => {
  return (
    <ButtonStyled onClick={onClick}><Tooltip text="Deletar nota salva"><FontAwesomeIcon icon={faTrashCan} /></Tooltip></ButtonStyled>
  );
};

const ButtonStyled = styled.button`
    background-color: transparent;
    color: #d81c41;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 18px;
`;
