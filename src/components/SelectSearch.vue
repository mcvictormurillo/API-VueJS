<template>
    <div>
    <input @change="onchange" type="checkbox" 
    :id="movie.value" :value="movie.value">
    <label v-bind:for="movie.value">{{ movie.nombre}}</label>
      
    </div>
</template>

<script>
export default {
    name:'selectMovies',
    props:['movie'],
    methods:{
            onchange: function(ev){
                this.$emit('checked',this.movie, ev.target.checked)
            }
    }
}
</script>