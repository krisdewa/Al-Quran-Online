<template>
    <!-- card -->
    <div class="container mb-5">
        <!-- CARD -->
        <!-- <div class="row">
            <div class="col-md-4 col-12" v-for="(surah, index) in quran" :key="index">
                <router-link :to="{ name: 'surah', params: { id: surah.nomor } }"
                    class="text-decoration-none text-dark">
                    <div class="card mt-4">
                        <div class="card-body">
                            <h2 class="float-end"> {{ surah.nama }} </h2>
                            <h5 class="card-title nama-latin"> {{ index + 1 }}. {{ surah.nama_latin }}
                                <small>({{ surah.jumlah_ayat }} ayat)</small>
                            </h5>
                            <p class="card-text">{{ surah.arti }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div> -->
        <!-- END CARD -->
    </div>
    <!-- card -->
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
    name: 'SurahVue',
    components: {},
    async setup() {
        const quran = ref([])

        await new Promise(resolve => setTimeout(resolve, 5000));

        // fetch data menggunakan axios
        await axios.get('https://api-quran-id.herokuapp.com/juz')
            .then(res => {
                quran.value = res.data
                console.log(quran.value)
            }).catch(err => {
                console.log(err.res.data)
            })

        return {
            quran
        }
    },
}
</script>

<style scoped>
.card-body:hover {
    background-color: rgb(246, 246, 246);
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}

h5.nama-latin {
    font-weight: 700;
}
</style>