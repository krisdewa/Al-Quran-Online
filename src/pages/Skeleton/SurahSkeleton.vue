<template>
    <div class="container mb-2">
        <div class="row">
            <div class="col-md-12">
                <div class="input-group">
                    <input type="text" class="form-control p-3" placeholder="Ketik nama surat...">
                </div>
            </div>
        </div>
    </div>

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
.card {
    border-top-left-radius: 3px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 3px;
}

.card-body:hover {
    background-color: rgb(246, 246, 246);
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.5);
    border-top-left-radius: 3px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 3px;
}

h5.nama-latin {
    font-weight: 700;
}
</style>