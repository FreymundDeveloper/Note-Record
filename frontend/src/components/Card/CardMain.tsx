import React from 'react';
import styled from 'styled-components';
import { Title } from '../Text/Title';

interface CardMainProps {
  title: string;
  data: string;
  note: string;
  onButtonClick: () => void;
}

export const CardMain: React.FC<CardMainProps> = ({ title, data, note, onButtonClick }) => {
  return (
    <StyledCardMain>
      <StyledCard>
        <Content>
            <TitleContent>
                <Title contentTitle={title} modeling={2} ></Title>
                <Title contentTitle={data} modeling={3} ></Title>
            </TitleContent>
            <NoteContainer>
                <NoteIcon>X</NoteIcon>
                <NoteLabel>{note}</NoteLabel>
            </NoteContainer>
        </Content>
      </StyledCard>
      <Button onClick={onButtonClick}>X</Button>
    </StyledCardMain>
  );
};

const StyledCardMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 178px;
  height: 165px;
  background-color: #1127f0;
  border-radius: 18px;
  padding-right: 10px;
  position: relative;
`;

const StyledCard = styled.div`
  width: 165px;
  height: 165px;
  background-color: #0c7a01;
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

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 18px;
`;

const Content = styled.div`
  padding: 15px 0px;
`;

const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #007bff;
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