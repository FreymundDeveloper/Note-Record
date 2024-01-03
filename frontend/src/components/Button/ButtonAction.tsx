import React from 'react';
import styled from 'styled-components';

interface ButtonActionProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({ onClick, children }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background: ${(props) => props.theme.color.buttonColor};
  color: black;
  border: none;
  padding: 12px 48px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #a7981a;
  }
`;