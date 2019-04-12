import config from './config'
const apiKey = config.apiKey
const URL_MOVIE_POPULARS = config.UrlMoviePopulares

export default function getData(url){
    return fetch(url)
    .then(res => res.json())
    .then(json => json.results)
}