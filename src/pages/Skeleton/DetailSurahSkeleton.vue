<template>
    <main class="container mt-custom">
        <div class="bg-success p-4 rounded shadow text-white">
            <h1 class="float-end">
                <AnimatedPlaceholder width="70px" height="20px" borderRadius="5px" />
            </h1>
            <h1 class="">
                <AnimatedPlaceholder width="150px" height="20px" borderRadius="5px" />
            </h1>
            <hr>
            <div class="row">

                <div class="col-md-6">
                    <span class="lead">
                        <AnimatedPlaceholder width="160px" height="20px" borderRadius="5px" />
                    </span>
                    <h6 class="">
                        <AnimatedPlaceholder width="350px" height="20px" borderRadius="5px" />
                    </h6>
                </div>

                <div class="col-md-6 text-end justify-content-end">
                    <div class="">
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </main>

    <div class="container mb-5">
        <div class="row">
            <div class="col-md-12" v-for="(ayat, index) in ayat" :key="index">
                <div class="card mt-4 shadow-sm">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <h5 class="card-title nama-latin">
                                    <AnimatedPlaceholder width="150px" height="20px" borderRadius="5px" />
                                </h5>
                                <p class="card-text mt-4 fst-italic">
                                    <AnimatedPlaceholder width="500px" height="20px" borderRadius="5px" />
                                </p>
                            </div>
                            <div class="col-md-6 col-12">
                                <h2 class="text-end">
                                    <AnimatedPlaceholder width="70px" height="20px" borderRadius="5px" />
                                </h2>
                                <p class="text-end">
                                    <AnimatedPlaceholder width="150px" height="20px" borderRadius="5px" />
                                </p>
                            </div>
                        </div>
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

.card-body:hover {
    box-shadow: 0 0px 10px 0 rgb(181, 181, 181);
    border-radius: 5px;
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