import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ContainerTopic } from '../components';

export const Home: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <ContainerHome>
            <ContainerTopic content="Bimestre 1" cardText="Lançar Nota" onButtonClick={handleOpenModal} />
            <Modal isOpen={isModalOpen} content={"Bimestre 1"} onClose={handleCloseModal} />
        </ContainerHome>
    );
};

export const ContainerHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;

    @media (max-width: 548px) {
        max-width: 400px;
    }
`;

export default Home;