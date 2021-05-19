import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => (
    <ul aria-label='articles'>
        {articles.map((article) => (
            <li key={`${article.title}-${article.description}`}>
                <Article title={article.title} description={article.description} />

            </li>

        ))}
    </ul>
);

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
    ).isRequired
};

export default ArticleList;