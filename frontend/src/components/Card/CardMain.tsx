import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { maperBimester } from '../../utils/routesUtils';
import { ThemeType } from '../../themes/Theme';
import { getCardColor } from '../../utils/colorUtils';
import { Title, ButtonDelete, ContainerNote, Tooltip } from '../../components';

interface CardMainProps {
    title: string;
    data: string;
    note: string;
    id: string;
    onButtonClick: () => void;
}

export const CardMain: React.FC<CardMainProps> = ({ title, data, note, id, onButtonClick }) => {
    const [clearNote, setclearNote] = useState<string>(note);
    const formattedData = data.trim() === '' ? '??/??/????' : data;

    const callDelete = async () => {
        try {
            if (formattedData !== '??/??/????') {
                await axios.delete(`http://localhost:3001/results/${maperBimester(parseFloat(id))}/${title}`);
                setclearNote("");

                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }
        } catch (error) {
            console.error('Error to delete:', error);
        }
    }

    return (
        <StyledCardMain>
            <StyledCard title={title}>
                <Content>
                    <TitleContent>
                        <Tooltip text="Selcionar disciplina">
                            <Button onClick={onButtonClick}><Title contentTitle={title} modeling={2} ></Title></Button>
                        </Tooltip>
                        <Title contentTitle={formattedData} modeling={3} ></Title>
                    </TitleContent>
                    <ContainerNote title={title} note={clearNote} />
                </Content>
            </StyledCard>
        <ButtonDelete onClick={callDelete} />
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
    margin-right: 2px;
    margin-top: 10px;
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
    padding: 5px 0px 42px 15px;
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