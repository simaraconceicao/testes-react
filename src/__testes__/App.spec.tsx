import { render, screen } from '@testing-library/react';

import React from 'react';
import App from '../App';

describe('Testing App.jsx', () =>{
    it('should be able to show the h1 element', () => {
        render(<App />);
        const h1Element = screen.getByText(/olar testes/i);

        expect(h1Element).toBeInTheDocument();
    });
});