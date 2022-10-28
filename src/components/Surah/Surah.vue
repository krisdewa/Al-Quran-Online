<template>
    <main class="container mt-custom">
        <div class="bg-light p-4 rounded shadow">
            <h1 v-text="quran.nama" class="float-end"></h1>
            <h1 v-text="quran.nama_latin"></h1>
            <span v-text="quran.arti" class="lead"></span>
            <!-- <a class="btn btn-dark mt-2 float-end" href="https://krisproject.my.id" target="_blank"
                role="button">SELENGKAPNYA</a> -->
        </div>
    </main>

    <div class="container mb-5">
        <div class="row">
            <div class="col-md-12" v-for="(ayat, index) in ayat" :key="index">
                <div class="card mt-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h5 class="card-title nama-latin"> Surat {{ ayat.surah }} Ayat {{ ayat.nomor }} </h5>
                                <p class="card-text mt-5"> {{ ayat.idn }}</p>
                            </div>
                            <div class="col-md-6">
                                <h2 class="float-end"> {{ ayat.ar }} </h2>
                                <!-- <p class="float-end mt-5" v-html="ayat.tr"></p> -->
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
</style>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {
    name: 'SurahVue',
    components: {},
    setup() {

        //state posts
        const quran = reactive({
            nama: '',
            nama_latin: '',
            arti: '',
            ayat: [],
        })

        //reactive state
        let ayat = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Backend
            axios.get(`http://quran-api.santrikoding.com/api/surah/${route.params.id}`)
                .then(response => {

                    //assign state posts with response data
                    quran.nama_latin = response.data.nama_latin
                    quran.nama = response.data.nama
                    quran.arti = response.data.arti
                    ayat.value = response.data.ayat
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        //return
        return {
            quran,
            router,
            ayat,
        }

    }

}
</script>