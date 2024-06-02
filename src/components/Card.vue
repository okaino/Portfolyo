<template>
  
        <div class="card justify-center flex flex-col p-10">
            <div v-if="imgUrl.length>1" class="card-image">
            <img class="w-auto h-60 border shadow rounded-md " :src="imgUrl" alt="">
        </div>
            <h6 class="text-4xl">Multiple Diastemas</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit vel neque sequi excepturi
                accusantium corporis autem eum ex.</p>
        </div>

</template>

<script>
export default {

    props: {
        imgUrl: String,
    }
}
</script>

<style lang="scss" scoped></style>