import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../components/spinner/Spinner';


describe('it renders ArticleList Container', () => {
    render(<ArticleList />);


    screen.getByAltText('world loading spinner');

    const ul = await.screen.findByRole('list', {  })
})