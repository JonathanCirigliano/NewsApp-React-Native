import { articles_url, country, api_key} from '../config/rest_config'; 

export async function getArticles(argomento='sports') {

    try {
        let articles = await fetch(`${articles_url}?country=${country}&category=${argomento}`, {
            headers: {
                'X-API-KEY': api_key
            }   
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }

    catch(error) {
        throw error;
    }
}