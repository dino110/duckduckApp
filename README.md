# DuckDuckGo API app

This project aims to create an API proxy for DuckDuckGo and a corresponding front-end application. The API proxy will allow users to retrieve search results (titles with links) from DuckDuckGo (https://api.duckduckgo.com/?q={query}&format=json) based on a query parameter, while the front-end application will provide a user interface for submitting queries, displaying results and history of past queries.

## Technologies Used

### Backend

- Node.js with TypeScript for building the API proxy
- Express.js as the web framework for the API
- Axios as the HTTP client library
- CORS for handling cross-origin resource sharing
- express-rate-limit for rate limiting requests
- http-errors for creating HTTP errors

### Frontend

- Vite as the build tool for the front-end
- React with TypeScript for building the user interface
- Axios as the HTTP client library
- SASS for styling the components

## Installation and Setup

1. Clone the repository: git clone https://github.com/dino110/duckduckGO.git
2. Navigate to the project directory: cd duckduckGO
3. Install dependencies for the API proxy: cd backend && npm install
4. Install dependencies for the front-end: cd ../frontend && npm install

## API Proxy Usage

1. Start the API proxy server: cd backend && npm run dev
2. Submit a query parameter to the API by sending a GET request to http://localhost:4000/api?q=query, where query is the search query you want to perform.
3. The API will make a request to DuckDuckGo API with the provided query and return a JSON response containing an array of objects with URL and title fields.

## Front-End Usage

1. Start the front-end application: cd frontend && npm run dev
2. Access the application in your web browser at http://localhost:3000.
3. Enter a search query in the input field and click the "Search" button to submit the query to the API proxy.
4. The search results will be displayed on the page, with each title as a clickable link.
5. The sidebar will show a list of past queries. Clicking on a query will repeat the API request, display the results below the search input, and populate the search input
6. with the selected query.

## Additional Functionality

1. The API proxy provides an additional endpoint http://localhost:4000/api/post where you can send a POST request with the query parameter in the request body to retrieve results from DuckDuckGo.
2. The history of queries is persisted in a local file. The API will load the query history when the application starts, and it will save the new queries to the file automatically.

## Contact

If you have any questions, suggestions, or feedback, please feel free to contact me at dino.kotaranin@gmail.com .
