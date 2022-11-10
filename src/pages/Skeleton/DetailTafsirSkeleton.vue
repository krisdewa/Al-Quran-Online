<template>
    <main class="container mt-custom">
        <div class="bg-success p-4 rounded shadow text-white">
            <h1 class="float-end">
                <AnimatedPlaceholder width="110px" height="6px" borderRadius="5px" />
            </h1>
            <h1 class="">
                <AnimatedPlaceholder width="250px" height="20px" borderRadius="5px" />
            </h1>
            <div class="row">
                <div class="col-md-6">
                    <span class="lead">
                        <AnimatedPlaceholder width="160px" height="20px" borderRadius="5px" />
                    </span>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6">
                <div class="d-grid gap-2">
                    <AnimatedPlaceholder width="100%" height="35px" borderRadius="5px" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="d-grid gap-2">
                    <AnimatedPlaceholder width="100%" height="35px" borderRadius="5px" class="float-end" />
                </div>
            </div>
        </div>

    </main>

    <div class="container mb-5">
        <div class="row">
            <div class="col-md-12" v-for="(ayat, index) in ayat" :key="index">
                <div class="card mt-4 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">
                            <AnimatedPlaceholder width="150px" height="20px" borderRadius="5px" />
                        </h5>
                        <p class="card-text mt-4">
                            <AnimatedPlaceholder width="100%" height="200px" borderRadius="5px" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mt-custom {
    margin-top: 95px;
}

.card {
    border-top-left-radius: 3px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 3px;
}

.card-body:hover {
    box-shadow: 0 0px 10px 0 rgb(181, 181, 181);
    border-top-left-radius: 3px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 3px;
}
</style>

<script>
import AnimatedPlaceholder from '../../components/AnimatedPlaceholder.vue'

export default {
    name: 'DetailSurahVue',
    components: {
        AnimatedPlaceholder,
    },
    setup() {
        const ayat = 15;
        return {
            ayat,
        }
    },
}
</script>