import React from 'react';
import styled from 'styled-components';
import { convertToNormalText } from '../../utils/textUtils';

interface TitleProps {
  contentTitle: string;
  modeling: number;
}

export const Title: React.FC<TitleProps> = ({ contentTitle, modeling }) => {
  return <StyledTitle modeling={modeling}>{convertToNormalText(contentTitle)}</StyledTitle>;
};

const StyledTitle = styled.h2<{ modeling: number }>`
    font-size: ${(props) => {
        switch (props.modeling) {
            case 1:
                return '2.5em';
            case 2:
                return '1em';
            case 3:
                return '0.65em';
            default:
                return '2.5em';
        }
    }};
    font-weight: 100;
    letter-spacing: 1.5px;
    color: #fff;
    margin: 0;
`;