import React, { Component } from 'react';
import { render } from 'react-dom';
import ArticleList from '../components/articles/ArticleList';
import { fetchArticles, fetchArticleByKeyword } from '../services/NewsApiCalls';
import Spinner from '../components/spinner/Spinner';

export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
        title: ''
    };

    async componentDidMount() {
        const articles = await fetchArticles();
        await this.setState({
            loading: false,
            articles
        });
    }

    handleKeywordSearch = ({ target }) => {
        this.setState({ title: target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.setState({ loading: true });
        const articles = await fetchArticleByKeyword(this.state.title);
        await this.setState({ 
            loading: false,
            articles
        });
        };

    render() {
        const { loading, articles, title } = this.state;

        if (loading) return <Spinner />

        return (
            <article aria-label='articles' alt='articles'>
                <ArticleList
                articles={articles}
                onKeywordSearch={this.handleKeywordSearch}
                onSubmit={this.handleSubmit}
                />
                <Article
                title={title}
                onKeywordSearch={this.handleKeywordSearch}
                onSubmit={this.handleKeywordSearch}
                />

            </article>
        )
    }
    }
