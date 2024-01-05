import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

interface TooltipTextProps {
    bottom: number;
    left: number;
  }

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ bottom: 125, left: 150 });
  
    const calculatePosition = () => {
      switch (text) {
        case 'Nota registrada':
          setTooltipPosition({ bottom: 125, left: 150 });
          break;
        case 'Deletar nota salva':
            setTooltipPosition({ bottom: 125, left: -200 });
          break;
        case 'Registrar notas':
            setTooltipPosition({ bottom: 125, left: -20 });
            break;
        case 'Fechar':
            setTooltipPosition({ bottom: 52, left: -50 });
          break;
        case 'Salvar Nota':
            setTooltipPosition({ bottom: 125, left: 70 });
          break;
        default:
          setTooltipPosition({ bottom: -125, left: 40 });
      }
    };

  return (
    <TooltipContainer
      onMouseEnter={() => {calculatePosition();setTooltipVisible(true)}}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {children}
      {isTooltipVisible && <TooltipText bottom={tooltipPosition.bottom} left={tooltipPosition.left}>{text}</TooltipText>}
    </TooltipContainer>
  );
};

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.div<TooltipTextProps>`
  position: absolute;
  bottom: ${(props) => `${props.bottom}%`};
  left: ${(props) => `${props.left}%`};
  transform: translateX(-50%);
  padding: 4px;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 12px;
`;
