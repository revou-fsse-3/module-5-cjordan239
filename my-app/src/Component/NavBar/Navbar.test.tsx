import { render, screen } from '@testing-library/react';
import NavBar from '.';
import React from 'react';

describe('Unit test for NavBar', () => {
    it('should render the navbar with login', () => {
        render(<NavBar />);
        expect(screen.getByText('Login')).toBeDefined();
        expect(screen.getByText('Login')).toMatchSnapshot();
    });

    test('should render navbar with home ', () => {
        render(<NavBar />);
        expect(screen.getByText('Login')).toBeDefined();
        expect(screen.getByText('Login')).toMatchSnapshot();
    });
});
