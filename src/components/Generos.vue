<template>
    <div class="col-md-3 mt-4">
    <div class="card text-white"> 
        <div class="card-img bg-info btn"  style="boder:none;height: 85px;"></div>
        <div class="card-img-overlay">
            <p class="card-title text-center">{{generos.name}}</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'generos',
    props:['generos']
}
</script>
<style >
    p{
        font-size: 20px;
    }
</style>