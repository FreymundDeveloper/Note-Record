import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ContainerCard, ContainerHome } from '../components';
import { adaptToEnglish, createEmptyDetails } from '../utils/routesUtils';

export const Home: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [userSelection, setUserSelection] = useState<number>(1);
    const [apiData, setApiData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseOne= await axios.get('http://localhost:3001/results?bimester=PRIMEIRO');
                const dataOne = {
                    id: 1,
                    details: responseOne.data.length > 0 ? adaptToEnglish(responseOne.data) : createEmptyDetails()
                };

                const responseTwo = await axios.get('http://localhost:3001/results?bimester=SEGUNDO');
                const dataTwo = {
                    id: 2,
                    details: responseTwo.data.length > 0 ? adaptToEnglish(responseTwo.data) : createEmptyDetails()
                };

                const responseThree = await axios.get('http://localhost:3001/results?bimester=TERCEIRO');
                const dataThree = {
                    id: 3,
                    details: responseThree.data.length > 0 ? adaptToEnglish(responseThree.data) : createEmptyDetails()
                };

                const responseFour = await axios.get('http://localhost:3001/results?bimester=QUARTO');
                const dataFour = {
                    id: 4,
                    details: responseFour.data.length > 0 ? adaptToEnglish(responseFour.data) : createEmptyDetails()
                };

                setApiData([dataOne, dataTwo, dataThree, dataFour]);
            } catch (error) {
                console.error('Error to found API:', error);
            }
        };
        fetchData();
    }, []);

    const handleOpenModal = (selectedCard: number) => {
        setUserSelection(selectedCard);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setUserSelection(1);
    };

    const userOpenModal = (containerId: string, selectedCard: number) => {
        setUserSelection(selectedCard + 1);
        setModalOpen(true);
    };

    return (
        <ContainerHome>
            {apiData.map((data, index) => (
                <ContainerCard key={index} cardProps={data} onButtonClick={() => handleOpenModal(index + 1)} onCardButtonClick={userOpenModal} />
            ))}
            <Modal userSelectedCard={userSelection} isOpen={isModalOpen} content={`Bimestre ${userSelection}`} onClose={handleCloseModal} />
        </ContainerHome>
    );
};

export default Home;
