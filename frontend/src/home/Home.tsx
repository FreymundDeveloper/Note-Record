import React, { useState } from 'react';
import { Modal } from '../components';

const Home: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Open</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Home;