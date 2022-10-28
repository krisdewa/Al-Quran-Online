<template>
    <!-- card -->
    <div class="container mt-2">
        <div class="row">
            <div class="col-md-4" v-for="(surah, index) in quran" :key="index">
                <div class="card mt-4">
                    <div class="card-body">
                        <h2 class="float-end"> {{ surah.nama }} </h2>
                        <h5 class="card-title">{{ surah.nama_latin }}
                            <small>({{ surah.jumlah_ayat }} ayat)</small>
                        </h5>
                        <p class="card-text">{{ surah.arti }}</p>
                        <a :href="'/surah/' + surah.nomor" class="btn btn-warning">Baca Surah</a>
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

<style>
.card-body:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
}
</style>