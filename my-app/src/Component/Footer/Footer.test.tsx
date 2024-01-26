import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Unit test for Footer', () => {

    test('should render footer with social media icons', () => {
        render(<Footer />);
        expect(screen.getByAltText('Facebook')).toBeDefined();
        expect(screen.getByAltText('Twitter')).toBeDefined();
        expect(screen.getByAltText('Instagram')).toBeDefined();
    });

    test('should render footer with "Buy me a coffee" link', () => {
        render(<Footer />);
        expect(screen.getByText('Buy me a coffee')).toBeDefined();
    });
});
