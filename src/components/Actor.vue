<template>
<div class="col-4 mt-4 cursor" >
    <div class="card mb-3" >
        <div class="row no-gutters">
            <div class="col-md-4">
                <img :src="urlImage + actor.profile_path"  class="card-img" alt="...">
            </div>
            <div class="col-md-8" >
                <div class="card-body" >
                    <h4 class="card-title">{{actor.name}}</h4>
                    <h4 class="card-title">{{index}}</h4>
                    <p class="card-text">Peliculas:{{actor.known_for.length}}</p>
                    <p class="card-text">Popularidad:{{actor.popularity}}</p>
                    <button  @click="pelicuasDeActor"  :id="index" type="button" class="btn btn-info">Ver Peliculas</button>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>

//https://www.infobae.com/new-resizer/p6rVTv2wKNNXB12ngsKsOzMKBwI=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/09164345/agujero-negro.jpg
export default {
    name: 'actor',
    props: ['actor','index','urlImage','pelicuasDeActor']
}
</script>