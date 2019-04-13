<template>
<div class="col-6 mt-4 cursor">
    <div class="card mb-3" >
        <div class="row no-gutters">
            <div class="col-md-4">
                <img :src="urlImage + movie.poster_path"  class="card-img" alt="...">
            </div>
            <div class="col-md-8" >
                <div class="card-body" >
                    <h5 class="card-title">{{movie.original_title}}</h5>
                    <p class="card-text">{{movie.overview}}</p>
                    <p id="parrafo" class="card-text">{{movie.popularity}}</p>
                    <p id="parrafo" class="card-text">{{generos}}</p>
                    <small class="card-text">{{movie.release_date}}</small>
                    

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>


//https://www.infobae.com/new-resizer/p6rVTv2wKNNXB12ngsKsOzMKBwI=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/09164345/agujero-negro.jpg
export default {
    name: 'movie',
    props: ['movie','urlImage','generos']
}
</script>