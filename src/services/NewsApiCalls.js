// check API for actual terms to destructure from their data set
const mungeArticles = (json) =>
    json.map(({ keyword, headline, article }) => ({
        keyword: keyword,
        title: headline,
        article
    }));

export const fetchArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything`);
    const jsonBody = await res.json();

    return mungeArticles(jsonBody);
}

export const fetchArticleByKeyword = async (keyword) => {
    const res = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${APIKEY}`
    );
    const jsonBody = await res.json();

    return mungeArticles(jsonBody);
};