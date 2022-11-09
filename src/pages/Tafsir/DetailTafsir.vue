<template>
    <main class="container mt-custom">
        <div class="bg-success p-4 rounded shadow text-white">
            <!-- <h1 v-text="tafsir.nama" class="float-end"></h1>
            <h1 v-text="tafsir.nama_latin" class=""></h1> -->

            <!-- <hr> -->
            <div class="row">
                <div class="col-md-6">
                    <h2 class="fw-bold">
                        <span v-text="tafsir.nama_latin" /> - <span v-text="tafsir.nama" />
                    </h2>
                    <p class="text-capitalize"
                        v-text="tafsir.tempat_turun + ' • ' + tafsir.jumlah_ayat + ' ayat' + ' • ' + tafsir.arti"></p>
                </div>
                <div class="col-md-6 text-end justify-content-end">
                    <div class="">
                        <div class="mt-1">
                            <router-link :to="{ name: 'surah', params: { id: tafsir.nomor } }"
                                class="btn btn-warning fw-bold"> Lihat Surat </router-link>
                            <!-- <a class="btn btn-warning fw-bold" href="" role="button"> Lihat Tafsir </a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-6 mt-1" v-if="tafsir.prev != false">
                <div class="d-grid gap-2">
                    <router-link :to="{ name: 'tafsir', params: { id: tafsir.prev_id } }" class="btn btn-success">
                        <i class="bi bi-arrow-left"></i> Surah Sebelumnya ({{ tafsir.prevsurah }})
                    </router-link>
                </div>
            </div>
            <div class="col-md-6" v-if="tafsir.prev == false"></div>
            <div class="col-md-6 mt-1" v-if="tafsir.next != false">
                <div class="d-grid gap-2">
                    <router-link :to="{ name: 'tafsir', params: { id: tafsir.next_id } }"
                        class="btn btn-success float-end">
                        ({{ tafsir.nextsurah }}) Surah Selanjutnya <i class="bi bi-arrow-right"></i>
                    </router-link>
                </div>
            </div>
        </div>

    </main>

    <div class="container mb-5">
        <div class="row">
            <div class="col-md-12" v-for="(tafrow, index) in tafrow" :key="index">
                <div class="card mt-3 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title nama-latin mb-4"> Ayat {{ tafrow.ayat }} </h5>
                        <p v-html="tafrow.tafsir" class="card-text" style="white-space: pre-wrap"> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer-vue />
</template>

<script>
import { reactive, ref } from 'vue'
// import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import FooterVue from '@/components/Footer.vue'

export default {
    name: 'DetailSurahVue',
    components: {
        FooterVue,
    },
    data() {
        return {}
    },
    async setup() {
        //state posts
        const tafsir = reactive({
            nomor: '',
            nama: '',
            nama_latin: '',
            jumlah_ayat: '',
            tempat_turun: '',
            arti: '',
            tafsir: [],
            surat_selanjutnya: {
                id: '',
                nomor: '',
                nama: '',
                nama_latin: '',
                jumlah_ayat: '',
                tempat_turun: '',
                arti: '',
            },
            surat_sebelumnya: {
                id: '',
                nomor: '',
                nama: '',
                nama_latin: '',
                jumlah_ayat: '',
                tempat_turun: '',
                arti: '',
            },
        })

        // const tafsir = ref({})

        //reactive state
        let tafrow = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        // await new Promise(resolve => setTimeout(resolve, 5000));

        // get API from Backend
        await axios.get(`https://equran.id/api/tafsir/${route.params.id}`)
            .then(response => {

                //assign state posts with response data
                tafsir.nomor = response.data.nomor
                tafsir.nama_latin = response.data.nama_latin
                tafsir.nama = response.data.nama
                tafsir.arti = response.data.arti
                tafsir.ayat = response.data.ayat
                tafsir.jumlah_ayat = response.data.jumlah_ayat
                tafsir.tempat_turun = response.data.tempat_turun
                tafsir.audio = response.data.audio
                tafsir.next = response.data.surat_selanjutnya
                tafsir.prev = response.data.surat_sebelumnya
                tafsir.next_id = response.data.surat_selanjutnya.id
                tafsir.prev_id = response.data.surat_sebelumnya.id
                tafsir.nextsurah = response.data.surat_selanjutnya.nama_latin
                tafsir.prevsurah = response.data.surat_sebelumnya.nama_latin

                // tafsir.value = response.data

                //assign state posts with response data
                tafrow.value = response.data.tafsir
            }).catch(error => {
                console.log(error.response.data)
            })

        return {
            router,
            tafsir,
            tafrow,
        }
    },
}
</script>

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

.card-text {
    margin-top: -10px;
}

/* Specifies the size of the audio container */
audio {
    margin-top: 5px;
    background-color: #ffc107;
    border-radius: 5px;
    width: 100%;
}

audio::-webkit-media-controls-panel {
    background-color: #ffc107;
    justify-content: center;
}
</style>