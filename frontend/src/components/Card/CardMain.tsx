import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { ThemeType } from '../../themes/Theme';
import { getCardColor } from '../../utils/colorUtils';
import { Title, ButtonDelete } from '../../components';

interface CardMainProps {
  title: string;
  data: string;
  note: string;
  onButtonClick: () => void;
}

export const CardMain: React.FC<CardMainProps> = ({ title, data, note, onButtonClick }) => {
    return (
        <StyledCardMain>
        <StyledCard title={title}>
            <Content>
                <TitleContent>
                    <Button onClick={onButtonClick}><Title contentTitle={title} modeling={2} ></Title></Button>
                    <Title contentTitle={data} modeling={3} ></Title>
                </TitleContent>
                <NoteContainer title={title}>
                    <NoteIcon>X</NoteIcon>
                    <NoteLabel>Nota: {note}</NoteLabel>
                </NoteContainer>
            </Content>
        </StyledCard>
        <ButtonDelete onClick={onButtonClick} />
        </StyledCardMain>
    );
};

const StyledCardMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 188px;
    height: 165px;
    background-color: ${(props) => props.theme.color.bodyColor};
    border-radius: 18px;
    padding-right: 10px;
    position: relative;
`;

const StyledCard = styled.div<{ title: string; theme: ThemeType }>`
    width: 175px;
    height: 165px;
    background-color: ${(props) => getCardColor(props.title, props.theme)};
    border-radius: 18px;
    overflow: hidden;
`;

const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 5px 0px 40px 15px;
    color: #fff;
    > * {
        margin-bottom: 8px;
    }
`;

const Button = styled.div`
    cursor: pointer;
`;

const Content = styled.div`
    padding: 15px 0px;
`;

const NoteContainer = styled.div<{ title: string; theme: ThemeType }>`
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