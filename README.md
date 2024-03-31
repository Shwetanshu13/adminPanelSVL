# Admin Panel

## Assignment - SIDDI VINAYAKA CREATIVE LABS

## Overview
It is an assignment project given by SIDDI VINAYAKA CREATIVE LABS to create an admin panel in React.js . 

### 
The react app was created using vite. Several external packages were used in creating the components of the app. Tailwind was used for the styling in the app. Context API was used for the News Preview. The app has a responsive design. 

> [!Note]
> The preview feature is availible to get a preview for the written news. The mobile screen will have a direct preview feature, whereas larger screens will have a mobile screen preview in the preview page.

> [!Important]
> To fetch the random numbers from the api request, the app uses proxy to deal with the CORS error produced while calling the api from localhost. Thus, just in the the worst case, the proxy is not configured properly and is giving an error, kindly uncomment the "Proxy Error" heading code.

## Installation

1. Download the code from the Repository
2. Run the command
```terminal
npm install 
```
3. Rename the .env.sample file to .env file
4. Register yourself at [NewsAPI](https://newsapi.org/) and get a API Key for free
5. Replace the content in the .env file with
```.env
VITE_NEWS_API_KEY = "<YOUR API KEY>"
```
6. Now start the server with 
```javascript
npm run dev
```
7. The app will be running on the specified link.