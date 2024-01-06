import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render App', () => {
  render(<App />);
});

//Prototype Data From Routes Rest
const propt = {
  id: '1',
  details: [
      {
          discipline: 'BIOLOGIA',
          createdData: '02/10/1807',
          note: "5.0"
      }
  ]
}
