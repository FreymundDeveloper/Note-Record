import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  contentTitle: string;
  modelSmall: number;
}

export const Title: React.FC<TitleProps> = ({ contentTitle, modelSmall }) => {
  return <StyledTitle modelSmall={modelSmall}>{contentTitle}</StyledTitle>;
};

const StyledTitle = styled.h2<{ modelSmall: number }>`
    font-size: ${(props) => {
        switch (props.modelSmall) {
            case 1:
                return '2.5em';
            case 2:
                return '1em';
            case 3:
                return '0.6em';
            default:
                return '2.5em';
        }
    }};
    font-weight: 100;
    letter-spacing: 1.5px;
    color: #fff;
    margin: 0;
`;