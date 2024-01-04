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
    const noteValue = parseFloat(note);

    let noteColor = '';
    if (note === '' || isNaN(noteValue)) {
        noteColor = '#fff';
        note = '?';
    }
    else if (noteValue >= 0 && noteValue < 6) noteColor = '#d81c41';
    else if (noteValue >= 6 && noteValue < 8) noteColor = '#FFD700';
    else if (noteValue >= 8 && noteValue <= 10) noteColor = '#ADFF2F';
    

    return (
        <NoteContainerStyled title={title} theme={theme} noteColor={noteColor}>
            <NoteIcon color={noteColor}>X</NoteIcon>
            <NoteLabel color={noteColor}>Nota: {note}</NoteLabel>
        </NoteContainerStyled>
    );
};

const NoteContainerStyled = styled.div<{ title: string; theme: ThemeType; noteColor: string }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => darken(0.3, getCardColor(props.title, props.theme))};
  margin-bottom: 0;
  height: 40px;
`;

const NoteIcon = styled.span<{ color: string }>`
  font-size: 20px;
  margin-left: 10px;
  margin-right: 5px;
  color: ${(props) => props.color};
`;

const NoteLabel = styled.div<{ color: string }>`
  font-size: 14px;
  color: ${(props) => props.color};
`;
