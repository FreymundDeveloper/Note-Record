import React from 'react';
import styled from 'styled-components';
import { ButtonAction, Title, Tooltip } from '../../components';

interface ContainerTopicProps {
    content: string;
    cardText: string;
    onButtonClick: () => void;
}

export const ContainerTopic: React.FC<ContainerTopicProps> = ({ content, cardText, onButtonClick }) => {
  return (
    <Container>
      <TitleContainer>
        <Title contentTitle={content} modeling={2} />
      </TitleContainer>
      <CardContainer>
        <Card>
          <CardText>{cardText}</CardText>
          <Tooltip text="Registrar notas">
            <ButtonAction onClick={onButtonClick}>&#43;</ButtonAction>
          </Tooltip>
        </Card>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
`;

const TitleContainer = styled.div`
  margin-right: 20px;
`;

const CardContainer = styled.div`
    background: ${(props) => props.theme.color.buttonColor};
    display: flex;
    align-items: center;
    border-radius: 8px;
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 10px;
`;

const CardText = styled.div`
    margin-right: 10px;
    font-weight: 700;
    font-size: 14px;

  @media (max-width: 548px) {
      display: none;
  }
`;
