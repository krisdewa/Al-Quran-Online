<template>
    <main class="container mt-custom">
        <div class="bg-success p-4 rounded shadow text-white">
            <h1 v-text="quran.nama" class="float-end"></h1>
            <h1 v-text="quran.nama_latin" class=""></h1>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    <span v-text="'Arti : ' + quran.arti" class="lead"></span>
                    <h6 v-text="'📃 Jumlah Ayat : ' + quran.jumlah_ayat + ' 🗺️ Tempat Turun : ' + quran.tempat_turun"
                        class="">
                    </h6>
                </div>
                <div class="col-md-6 text-end justify-content-end">
                    <div class="">
                        <!-- <a class="btn btn-dark btn-lg mt-2" href="https://krisproject.my.id" target="_blank"
                            role="button">
                            ▶️ PLAY AUDIO
                        </a> -->


                        <!-- <a class="btn btn-dark btn-lg mt-2" href="https://krisproject.my.id" target="_blank"
                            role="button">
                        </a>

                        <router-link :to="{ name: 'quran', params: { id: quran.nomor } }"
                            class="btn btn-dark btn-lg mt-2">
                            Baca Surah Selanjutnya
                        </router-link> -->
                    </div>
                </div>
            </div>
            <hr>
            <!-- <div class="row mt-4">
                <div class="col-md-6">
                    <div v-if="quran.surat_sebelumnya != false">
                        <router-link :to="{ name: 'surah', params: { id: quran.surat_sebelumnya } }"
                            class="btn btn-dark btn-lg">
                            Baca Surah Sebelumnya
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-grid gap-2" v-if="quran.surat_sebelumnya != false">
                        <router-link :to="{ name: 'surah', params: { id: surat_selanjutnya.id } }"
                            class="btn btn-dark btn-lg float-end">
                            {{ quran.surat_selanjutnya.nama_latin }} Baca Surah Selanjutnya
                        </router-link>
                    </div>
                </div>
            </div> -->
        </div>
    </main>

    <div class="container mb-5">
        <div class="row">
            <div class="col-md-12" v-for="(ayat, index) in ayat" :key="index">
                <div class="card mt-4 shadow-sm">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <h5 class="card-title nama-latin"> Surat {{ ayat.surah }} Ayat {{ ayat.nomor }} </h5>
                                <p class="card-text mt-4 fst-italic"> {{ ayat.idn }}</p>
                            </div>
                            <div class="col-md-6 col-12">
                                <h2 class="text-end"> {{ ayat.ar }} </h2>
                                <p class="text-end" v-html="ayat.tr"></p>
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
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {
    name: 'DetailSurahVue',
    components: {},
    data() {
        return {}
    },
    async setup() {
        //state posts
        const quran = reactive({
            nama: '',
            nama_latin: '',
            arti: '',
            ayat: [],
            jumlah_ayat: '',
            tempat_turun: '',
            surat_selanjutnya: {
                id: '',
                nama: '',
                nama_latin: '',
                arti: '',
                jumlah_ayat: '',
                tempat_turun: '',
            },
            surat_sebelumnya: {
                id: '',
                nama: '',
                nama_latin: '',
                arti: '',
                jumlah_ayat: '',
                tempat_turun: '',
            },
        })

        //reactive state
        let ayat = ref([])

        let surat_selanjutnya = ref({
            id: '',
            nama: '',
            nama_latin: '',
            arti: '',
            jumlah_ayat: '',
            tempat_turun: '',
        })

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        // get API from Backend
        await axios.get(`http://quran-api.santrikoding.com/api/surah/${route.params.id}`)
            .then(response => {

                //assign state posts with response data
                quran.nama_latin = response.data.nama_latin
                quran.nama = response.data.nama
                quran.arti = response.data.arti
                quran.ayat = response.data.ayat
                quran.jumlah_ayat = response.data.jumlah_ayat
                quran.tempat_turun = response.data.tempat_turun
                quran.surat_selanjutnya = response.data.surat_selanjutnya.id
                quran.surat_sebelumnya = response.data.surat_sebelumnya.id

                surat_selanjutnya.value = response.data.surat_selanjutnya.id
                //assign state posts with response data
                ayat.value = response.data.ayat
            }).catch(error => {
                console.log(error.response.data)
            })

        return {
            quran,
            router,
            ayat,
        }
    },

    // setup() {
    //     //state posts
    //     const quran = reactive({
    //         nama: '',
    //         nama_latin: '',
    //         arti: '',
    //         ayat: [],
    //         jumlah_ayat: '',
    //         tempat_turun: '',
    //         surat_selanjutnya: {
    //             id: '',
    //             nama: '',
    //             nama_latin: '',
    //             arti: '',
    //             jumlah_ayat: '',
    //             tempat_turun: '',
    //         },
    //         surat_sebelumnya: {
    //             id: '',
    //             nama: '',
    //             nama_latin: '',
    //             arti: '',
    //             jumlah_ayat: '',
    //             tempat_turun: '',
    //         },
    //     })
    //     //reactive state
    //     let ayat = ref([])
    //     let surat_selanjutnya = ref({
    //         id: '',
    //         nama: '',
    //         nama_latin: '',
    //         arti: '',
    //         jumlah_ayat: '',
    //         tempat_turun: '',
    //     })

    //     //vue router
    //     const router = useRouter()
    //     //vue router
    //     const route = useRoute()

    //     //mounted
    //     onMounted(() => {
    //         //get API from Backend
    //         axios.get(`http://quran-api.santrikoding.com/api/surah/${route.params.id}`)
    //             .then(response => {
    //                 //assign state posts with response data
    //                 quran.nama_latin = response.data.nama_latin
    //                 quran.nama = response.data.nama
    //                 quran.arti = response.data.arti
    //                 quran.ayat = response.data.ayat
    //                 quran.jumlah_ayat = response.data.jumlah_ayat
    //                 quran.tempat_turun = response.data.tempat_turun
    //                 quran.surat_selanjutnya = response.data.surat_selanjutnya.id
    //                 quran.surat_sebelumnya = response.data.surat_sebelumnya.id

    //                 surat_selanjutnya.value = response.data.surat_selanjutnya.id

    //                 //assign state posts with response data
    //                 ayat.value = response.data.ayat
    //             }).catch(error => {
    //                 console.log(error.response.data)
    //             })
    //     })
    //     //return
    //     return {
    //         quran,
    //         router,
    //         ayat,
    //     }

    // },
}
</script>