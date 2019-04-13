export default{
    endPoint: 'https://api.themoviedb.org/3',
    apiKey: 'api_key=d2f75c50a366b48f468d9a270511e992',
    UrlMoviePopulares: 'https://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&sort_by=popularity.desc',
    UrlImage: 'http://image.tmdb.org/t/p/original/',
    UrlClasificacionR: 'https://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&certification_country=US&certification=R&sort_by=vote_average.desc',
    UrlNinos: 'http://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&certification_country=US&certification_country=US&certification.lte=G&sort_by=popularity.desc',
    UrlDrama: 'http://api.themoviedb.org/3/discover/movie?api_key=d2f75c50a366b48f468d9a270511e992&with_genres=18&primary_release_year=2019',
    UrlSearchMovie: 'http://api.themoviedb.org/3/search/movie?api_key=d2f75c50a366b48f468d9a270511e992&query=',
    UrlSearchActor: 'https://api.themoviedb.org/3/search/person?api_key=d2f75c50a366b48f468d9a270511e992&query=:movie"',
    GENEROS: [
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        {
          "id": 10402,
          "name": "Music"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 10770,
          "name": "TV Movie"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "War"
        },
        {
          "id": 37,
          "name": "Western"
        }
    ]
}