import React, { useState } from 'react';
import styled from 'styled-components';

interface InputNoteProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputNote: React.FC<InputNoteProps> = ({ value, onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^-?\d*\.?\d*$/;
        if (regex.test(e.target.value) || e.target.value === '') {
            onChange(e);
        }
    };

    const handleInputClick = () => {
        onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    };

    const disabledControl = () => {
        if (value === "") return false;
        else return value?.length === undefined;
    }

    return (
        <StyledInput
            type="text" value={parseFloat(value) <= 0 || parseFloat(value) > 10 ? "0" : value} onChange={handleInputChange} onClick={handleInputClick}
            maxLength={5} disabled={disabledControl()} />
    );
};

const StyledInput = styled.input`
    margin-top: 0;
    padding: 15px;
    border: 3px solid #4b4949;
    border-radius: 12px;
    color: #4b4949;
    background-color: black;
    width: 60px;
    font-size: 1.4em;
    text-align: center;
    letter-spacing: 0.02em;
`;
