# react-forms

1. Service to fetch API Calls

   - http calls with fetch `https://newsapi.org/v2/everything`
   - /everything endpoint
   - munge json
   - fetch article by keyword `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${APIKEY}`

2. Container to hold search, loading and articles state

   - class component
   - component did mount on load -- article list / fetch everything
   - handle search change
   - handle submit
   - render Search and Article List /import them

3. Components:

   - Article display title, author, description
   - one article, keys from API
   - return jsx
   - prop types
   - Article List display list of articles
   - map articles
   - send jsx
   - prop types arrayOf keys from API and shape (isRequired)
   - search display form/buttons (like controls)
   - form on Submit
   - input
   - button
   - search prop types

4. 4 tests: components and container

   - with snapshots per test

5. App will call container
