import React from 'react';
import styled from 'styled-components';

interface ButtonDeleteProps {
    onClick: () => void;
}

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({ onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>X</ButtonStyled>
  );
};

const ButtonStyled = styled.button`
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 18px;
`;
