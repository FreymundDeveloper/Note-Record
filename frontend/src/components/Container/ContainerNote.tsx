import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { ThemeType } from '../../themes/Theme';
import { getCardColor } from '../../utils/colorUtils';

interface ContainerNoteProps {
    title: string;
    theme?: ThemeType;
    note: string;
}

export const ContainerNote: React.FC<ContainerNoteProps> = ({ title, theme, note }) => {
    return (
        <NoteContainerStyled title={title} theme={theme}>
            <NoteIcon>X</NoteIcon>
            <NoteLabel>Nota: {note}</NoteLabel>
        </NoteContainerStyled>
    );
};

const NoteContainerStyled = styled.div<{ title: string; theme: ThemeType }>`
    display: flex;
    align-items: center;
    background-color: ${(props) => darken(0.3, getCardColor(props.title, props.theme))};
    margin-bottom: 0;
    height: 40px;
`;

const NoteIcon = styled.span`
    font-size: 20px;
    margin-left: 10px;
    margin-right: 5px;
`;

const NoteLabel = styled.div`
    font-size: 14px;
`;
