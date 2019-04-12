<template>
    <div class="col-6 mt-4 cursor">
        <div class="card mb-3" >
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src=${IMG_URL+ movie.poster_path}  class="card-img" >
                </div>
                <div class="col-md-8" >
                    <div class="card-body" >
                        <h5 class="card-title">${movie.original_title}</h5>
                        <p id="parrafo" class="card-text">${movie.overview}</p>
                        <p id="parrafo" class="card-text">${movie.popularity}</p>
                        <small class="card-text"><small class="text-muted">${movie.release_date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>