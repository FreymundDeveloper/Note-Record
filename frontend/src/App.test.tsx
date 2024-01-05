import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render App', () => {
  render(<App />);
});

const exemp = { //Prototype From Routes Rest
  id: '1',
  details: [
      {
          discipline: 'Biologia',
          createdData: '02/10/1807',
          note: "5.0"
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
