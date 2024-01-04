import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ContainerTopic, CardMain } from '../components';

export const Home: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [userSelection, setUserSelection] = useState<number>(1);

    const handleOpenModal = () => {
        setUserSelection(1);
        setModalOpen(true);
    };

    const userOpenModal = () => {
        setUserSelection(3);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setUserSelection(1);
    };

    return (
        <ContainerHome>
            <ContainerTopic content="Bimestre 1" cardText="Lançar Nota" onButtonClick={handleOpenModal} />
            <CardMain title="Geografia" data="02/10/1807" note="5.0" onButtonClick={userOpenModal} />
            <Modal userSelectedCard={userSelection} isOpen={isModalOpen} content={"Bimestre 1"} onClose={handleCloseModal} />
        </ContainerHome>
    );
};

export const ContainerHome = styled.div`
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

export default Home;