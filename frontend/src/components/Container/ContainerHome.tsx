import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerHomeProps {
    children: ReactNode;
}

export const ContainerHome: React.FC<ContainerHomeProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 1000px;
    margin: 0 auto;
    margin-top: 40px;

    @media (max-width: 548px) {
        max-width: 400px;
    }
`;
