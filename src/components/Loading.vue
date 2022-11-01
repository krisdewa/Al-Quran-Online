<template>
    <div>
        <!-- <div class="text-center mt-5">
            <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div> -->

        <!-- Loading 3 dots -->
        <div class="text-center loading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoadingVue',
}
</script>
<style scoped>
.loading {
    margin-top: 110px;
    margin-bottom: 110px;
}
</style>