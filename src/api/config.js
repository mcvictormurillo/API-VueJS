export default{
    endPoint: 'https://api.themoviedb.org/3',
    apiKey: 'api_key=d2f75c50a366b48f468d9a270511e992',
    UrlMoviePopulares: 'https://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&sort_by=popularity.desc',
    UrlImage: 'http://image.tmdb.org/t/p/original/',
    UrlClasificacionR: 'https://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&certification_country=US&certification=R&sort_by=vote_average.desc',
    UrlNinos: 'http://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&certification_country=US&certification_country=US&certification.lte=G&sort_by=popularity.desc',
    UrlDrama: 'http://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&with_genres=18&primary_release_year=2019',
    UrlSearchMovie: 'http://api.themoviedb.org/3/search/movie?api_key=d2f75c50a366b48f468d9a270511e992&query=',
    UrlSearchActor: 'https://api.themoviedb.org/3/search/person?api_key=d2f75c50a366b48f468d9a270511e992&query=:movie"'
}