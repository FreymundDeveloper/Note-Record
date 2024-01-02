import React from 'react';
import styled from 'styled-components';

interface ActionButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children }) => {
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