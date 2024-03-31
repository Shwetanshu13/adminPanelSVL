// file for importing environment variables from .env file to be used in the app

const env_import = {
    apiKey:String(import.meta.env.VITE_NEWS_API_KEY),
}

export default env_import