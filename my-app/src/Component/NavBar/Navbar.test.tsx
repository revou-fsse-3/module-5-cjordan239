import { describe, it } from "node:test";
import { render, screen } from '@testing-library/react';
import NavBar from ".";
import React from "react";

describe('Testing unit Navbar', () => {
    it('should render the navbar with Login, Home, and Register links', () => {
        render(<NavBar />);
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Register')).toBeInTheDocument();
    });
});
