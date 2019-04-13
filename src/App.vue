<template>

  <div id="app" class="container-fluid">
      <!-- HEADER NAV BAR-->
     <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-bran   d" href="#">
                <img src="src/assets/video-camera (1).png" class="mr-3" alt="logo"> Movies
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a @click="mostrarOpcionesDePeliculas" class="nav-link" href="#main">Colecciones de Peliculas <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a @click="mostrarOpcionesDeActores" class="nav-link" href="#buscarPorActor">Actores</a>
                    </li> 
                    <li class="nav-item">
                        <a class="nav-link" href="#generos">Generos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#conviertete-en-orador">Mas</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


<!--/HEADER NAV -->



<div class="row mt-8">
  <div   class="container row mt-10 ">
      <div v-if="opcionesDePeliculas" class="input-group mb-3 col-5 offset-1 ">
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

     <div  v-if="opcionesDePeliculas" class="input-group mb-3 col-4 ">
        <input v-model="searchMovie" type="text" class="form-control" placeholder="Nombre de la pelicula" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <span @click="getSearchMovie"  class="input-group-text" id="basic-addon2">Buscar</span>
        </div>
      </div>

      <div  v-if="opcionesDeActores" class="input-group mb-3 col-4 offset-4 ">
        <input v-model="searchActor" type="text" class="form-control" placeholder="Nombre de la pelicula" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <span @click="getDataActor"  class="input-group-text" id="basic-addon2">Buscar</span>
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

    <div v-if="opcionesDePeliculas" class="row ">
      <movie v-for="movie in movies" :generos="movie.genre_ids | mostrarGenero" :key="movie.id" :movie="movie" :urlImage="urlImage"></movie>
    </div>
  </div>

  <div class="container">
    <div v-if="opcionesDeActores" class="row">
      <movie v-for="movie in movies" :key="movie.id" :movie="movie" :urlImage="urlImage"></movie>
      <div class="row">
        <actor v-for="(actor,index ) in actores" :pelicuasDeActor="pelicuasDeActor" :key="actor.id" :actor="actor" :index="index" :urlImage="urlImage" ></actor>
      </div>
    </div>
  </div>
</div>
</template>
<script>

import getData from './api/index'
import Movie from './components/Movie.vue'
import Actor from './components/Actor.vue'
import selectMovies from './components/SelectSearch.vue'
import config from './api/config'
const generos = config.GENEROS
export default {
  name: 'app',
  data () {
    return {
      listaPeliculas:'Selecciona una coleccion de peliculas...',
      movies:[],
      actores:[],
      urlImage:config.UrlImage,
      urlActor:config.UrlSearchActor,
      searchMovie:'',
      searchActor:'',
      opcionesDePeliculas:true,
      opcionesDeActores:false
    }
  },
  components:{
    Movie,
    selectMovies,
    Actor
  },
  filters:{
    mostrarGenero: function(vector){
      
      var listGeneros=''
      var count=0
      for(let index=0; index<generos.length; index++ ){
        
        if(generos[index].id === parseInt(vector[count])){
         
          listGeneros+= ` ${ generos[index].name },`
          count+=1
        }
      }
      return listGeneros.substring(0,listGeneros.length-1)
    }
  },
  methods:{
    mostrarOpcionesDeActores: function(){
      this.opcionesDePeliculas=false;
      this.opcionesDeActores=true;
      this.movies=[]
    },
    mostrarOpcionesDePeliculas: function(){
      this.opcionesDePeliculas=true;
      this.opcionesDeActores=false;
      this.movies = []
    },
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
      
      //console.log(event.target.text)
      this.listaPeliculas = event.target.text
      let url = ''
      switch(event.target.id){
        case "mp": url = config.UrlMoviePopulares
        break;
        case 'cr': url = config.UrlClasificacionR
        break;
        case 'np': url = config.UrlNinos
        break;
        case 'da': url = config.UrlDrama
        break;
      }
      console.log(url)
      self = this
      getData(url).then(function(data){
        self.movies = data
        //self.mostrarGenero(data[0].genre_ids)
      })
      
    },

    getDataActor: function(){
      let url = this.urlActor.replace(':movie',this.searchActor)
      self = this
      self.movies=[]
      getData(url).then(function(data){
        self.actores = data
        console.log(data)
      })
    },
    pelicuasDeActor: function(event){
      this.movies=[]
      console.log(event.target.id)
      this.movies = this.actores[parseInt(event.target.id)].known_for
      console.log(this.movies)
    },
    

  }
}

</script>

<style>
#app{
  padding-right: 0px;
  padding-left: 0px;
  margin-bottom: 50px;
}

nav{
 margin-bottom: 50px;
}
.mar-top{
  margin-top:50px;
}
</style>
