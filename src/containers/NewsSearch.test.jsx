import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';


describe('it renders NewsSearch Container', async () => {
    render(<NewsSearch />);


    screen.findByAltText('world loading spinner');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
})