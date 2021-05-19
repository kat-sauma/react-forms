import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';


describe('NewsSearch Container', () => {
it('renders NewsSearch Article List', async () => {
    render(<NewsSearch />);


    screen.findByAltText('world loading spinner');

});
});