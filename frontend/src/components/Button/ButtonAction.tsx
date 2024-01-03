import React from 'react';
import styled from 'styled-components';

interface ButtonActionProps {
    onClick: () => void;
    children: React.ReactNode;
    sized?: 'main' | 'modal';
}

export const ButtonAction: React.FC<ButtonActionProps> = ({ onClick, children, sized = 'main' }) => {
    return <StyledButton sized={sized} onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button<{ sized: 'main' | 'modal' }>`
    background: ${(props) => props.theme.color.buttonColor};
    color: black;
    border: none;
    padding: ${(props) => (props.sized === 'main' ? '2px 6px' : '12px 32px')};
    border-radius: ${(props) => (props.sized === 'main' ? '3px' : '10px')};
    font-size: ${(props) => (props.sized === 'main' ? '24px' : 'inherit')};
    font-weight: ${(props) => (props.sized === 'main' ? 100 : 300)};
    cursor: pointer;
    line-height: ${(props) => (props.sized === 'main' ? 1 : 1.4)};

    &:hover {
        background-color: #a7981a;
    }

    @media (max-width: 548px) {
        padding: ${(props) => (props.sized === 'main' ? '2px 6px' : '12px 32px')};
    }
`;
