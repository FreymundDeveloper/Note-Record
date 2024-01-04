import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ContainerCard } from '../components';

export const Home: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [userSelection, setUserSelection] = useState<number>(1);
    const [note, setNote] = useState<string>("5.0");

    const handleOpenModal = () => {
        setUserSelection(1);
        setModalOpen(true);
    };

    const userOpenModal = () => {
        setUserSelection(3); // Modal Select
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setUserSelection(1);
    };

    const callDelete = () => {
        setNote("")
        //API Delete Logic ...
    }

    const exemp = { //Prototype From Routes Rest
        id: '1',
        details: [
            {
                discipline: 'Biologia',
                createdData: '02/10/1807',
                note: note
            },
            {
                discipline: 'Artes',
                createdData: '02/10/1899',
                note: '5.0'
            },
            {
                discipline: 'Geografia',
                createdData: '02/10/1899',
                note: '7.2'
            },
            {
                discipline: 'Sociologia',
                createdData: '02/10/1899',
                note: '10.0'
            }
        ]
    }

    return (
        <ContainerHome>
            <ContainerCard cardProps={exemp} onButtonClick={handleOpenModal} onCardButtonClick={userOpenModal} onClearNote={callDelete} />
            <ContainerCard cardProps={exemp} onButtonClick={handleOpenModal} onCardButtonClick={userOpenModal} onClearNote={callDelete} />
            <ContainerCard cardProps={exemp} onButtonClick={handleOpenModal} onCardButtonClick={userOpenModal} onClearNote={callDelete} />
            <ContainerCard cardProps={exemp} onButtonClick={handleOpenModal} onCardButtonClick={userOpenModal} onClearNote={callDelete} />
            <Modal userSelectedCard={userSelection} isOpen={isModalOpen} content={"Bimestre "+exemp.id} onClose={handleCloseModal} />
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