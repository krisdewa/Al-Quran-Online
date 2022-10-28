<template>
    <!-- card -->
    <div class="container mt-2 mb-5">
        <!-- SEARCH -->
        <div class="row">
            <div class="col-md-12 mt-3">
                <div class="input-group">
                    <input type="text" class="form-control p-3" placeholder="Ketik nama surat dan enter..">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="(surah, index) in quran" :key="index">
                <div class="card mt-4">
                    <div class="card-body">
                        <h2 class="float-end"> {{ surah.nama }} </h2>
                        <h5 class="card-title nama-latin"> {{ index + 1 }}. {{ surah.nama_latin }}
                            <small>({{ surah.jumlah_ayat }} ayat)</small>
                        </h5>
                        <p class="card-text">{{ surah.arti }}</p>
                        <!-- <a :href="'/surah/' + surah.nomor" class="btn btn-warning">Baca Surah</a> -->
                        <router-link :to="{ name: 'surah', params: { id: surah.nomor } }" class="btn btn-warning">Baca
                            Surah</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- card -->
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
    name: 'SurahVue',
    components: {},
    setup() {

        //reactive state
        let quran = ref([])

        //mounted
        onMounted(() => {

            //panggil function "getDataPosts" 
            getDataQuran()

        })

        //function "getDataPosts"
        function getDataQuran() {

            axios.get('http://quran-api.santrikoding.com/api/surah')
                .then(response => {
                    quran.value = response.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        }

        //return
        return {
            quran,
            getDataQuran,
        }

    }

}
</script>

<style scoped>
.card-body:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
}

h5.nama-latin {
    font-weight: 700;
}
</style>