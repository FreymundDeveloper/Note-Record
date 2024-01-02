import React from 'react';
import styled from 'styled-components';

interface TitleProps {
    period: number;
    modelSmall: boolean;
}

const StyledTitle = styled.h2<{ modelSmall: boolean }>`
    font-size: ${(props) => (props.modelSmall ? '1em' : '2.5em')};
    font-weight: 100;
    letter-spacing: 1.5px;
    color: #fff;
`;

export const Title: React.FC<TitleProps> = ({ period, modelSmall }) => {
    return <StyledTitle modelSmall={modelSmall}>Bimestre {period}</StyledTitle>;
};

