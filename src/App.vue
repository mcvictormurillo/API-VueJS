<template>

  <div id="app">
    <div class="container row ">
      <div class="input-group mb-3 col-5 ">
        <div class="input-group-prepend">
        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu">
          <a @click="getDataMovies" id="mp" class="dropdown-item" href="#">Mas populares</a>
          <a @click="getDataMovies" id="cr" class="dropdown-item" href="#">Mejor valoradas con clasificación R</a>
          <a @click="getDataMovies" id="np" class="dropdown-item" href="#">Para niños más populares</a>
          <a @click="getDataMovies" id="da" class="dropdown-item" href="#">Mejores dramas que se estrenaron este año</a>
          <div role="separator" class="dropdown-divider"></div>
          <a @click="getDataMovies" id="mp" class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <input :placeholder="listaPeliculas"  type="text" class="form-control " aria-label="Text input with segmented dropdown button" disabled>
     </div>
     <div class="input-group mb-3 col-5 ">
        <input v-model="searchMovie" type="text" class="form-control" placeholder="Nombre de la pelicula" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <span @click="getSearchMovie"  class="input-group-text" id="basic-addon2">Buscar</span>
        </div>
      </div>

      <div class="input-group mb-3 col-2 ">
        <div class="input-group-prepend">
        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu">
          <a @click="ordenarMovieReciente" class="dropdown-item" href="#">Mas recientes</a>
          <a @click="ordenarMoviePopular" class="dropdown-item" href="#">Mayor popularidad</a>
        </div>
      </div>
      <input placeholder="Filtrar.."  type="text" class="form-control" aria-label="Text input with segmented dropdown button" disabled>
     </div>
     
  </div>

    <div id="lita-peliculas-populares" class="row">
      <movie v-for="movie in movies" :key="movie.id" :movie="movie" :urlImage="urlImage"></movie>
    </div>
  </div>

</template>
<script>

import getData from './api/index'
import Movie from './components/Movie.vue'
import selectMovies from './components/SelectSearch.vue'
import config from './api/config'
export default {
  name: 'app',
  data () {
    return {
      listaPeliculas:'Selecciona una coleccion de peliculas...',
      movies:[],
      urlImage:config.UrlImage,
      searchMovie:''
    }
  },
  components:{
    Movie,
    selectMovies
  },
  methods:{
    ordenarMovieReciente: function(){
      let vector = this.movies
      this.movies = []
      for (let i = 0; i < vector.length-1; i++) {
       for (let j = 0; j < vector.length-1; j++) {
           if(this.convertirFechaAmilis(vector[j].release_date) < this.convertirFechaAmilis(vector[j+1].release_date)){
               let temp = vector[j+1]
               vector[j+1] = vector[j]
               vector[j] = temp
           }
       }
      }
      this.movies = vector
    },
    ordenarMoviePopular: function(){
      var vector = this.movies
      this.movies = []
      for (let i = 0; i < vector.length-1; i++) {
       for (let j = 0; j < vector.length-1; j++) {
           if(vector[j].popularity < vector[j+1].popularity){
               let temp = vector[j+1]
               vector[j+1] = vector[j]
               vector[j] = temp
           }
       }
      }
      this.movies = vector
    },
    convertirFechaAmilis: function(cadena){
      let arrfecha = String(cadena).split('-')
      return new Date(arrfecha[0],arrfecha[1],arrfecha[2])
    },
    
    getSearchMovie: function(){
      self = this
      getData(config.UrlSearchMovie+this.searchMovie).then(function(data){
        self.movies = data
      })
    },

    getDataMovies: function(event){
      console.log(event.target.text)
      this.listaPeliculas = event.target.text
      let url = ''
      switch(event.target.id){
        case "mp": url = config.UrlMoviePopulares
        break;
        case 'cr': url = config.UrlClasificacionR
        break;
        case 'np': url = config.UrlNinos
        break;
        case 'mp': url = config.UrlDrama
        break;
      }
      console.log(url)
      self = this
      getData(url).then(function(data){
        self.movies = data
      })
      
    }

  }
}
</script>

<style>
#app{
  margin-top:50px;
}
</style>
