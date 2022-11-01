<template>
    <!-- card -->
    <div class="container mt-2 mb-5">
        <div class="row">
            <div class="col-md-4 col-12" v-for="(index) in quran" :key="index">
                <div class="card mt-4">
                    <div class="card-body">
                        <h5 class="float-end">
                            <AnimatedPlaceholder width="70px" height="20px" borderRadius="5px" />
                        </h5>
                        <h5 class="card-title nama-latin">
                            <AnimatedPlaceholder width="150px" height="20px" borderRadius="5px" />
                        </h5>
                        <p class="card-text">
                            <AnimatedPlaceholder width="250px" height="20px" borderRadius="5px" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- card -->
</template>

<script>
import AnimatedPlaceholder from '../../components/AnimatedPlaceholder.vue'

export default {
    name: 'SurahSkeletonVue',
    components: {
        AnimatedPlaceholder,
    },
    setup() {
        const quran = 15;
        return {
            quran,
        }
    },
}
</script>

<style scoped>
h5.nama-latin {
    font-weight: 700;
}
</style>