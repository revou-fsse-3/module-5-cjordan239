import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Unit test for Footer', () => {
    test('should render footer with social media icons', () => {
        render(<Footer />);
        expect(screen.getByAltText('Facebook')).toBeDefined();
        expect(screen.getByAltText('Twitter')).toBeDefined();
        expect(screen.getByAltText('Instagram')).toBeDefined();
        expect(screen.getByAltText('Facebook')).toMatchSnapshot();
        expect(screen.getByAltText('Twitter')).toMatchSnapshot();
        expect(screen.getByAltText('Instagram')).toMatchSnapshot();
    });

    test('should render footer with "Buy me a coffee" link', () => {
        render(<Footer />);
        expect(screen.getByText('Buy me a coffee')).toBeDefined();
        expect(screen.getByText('Buy me a coffee')).toMatchSnapshot();
    });
});
