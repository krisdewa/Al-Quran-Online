<template>
    <!-- card -->
    <div class="container mt-2 mb-5">
        

        <!-- CARD -->
        <div class="row">
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
                            <!-- <router-link :to="{ name: 'surah', params: { id: surah.nomor } }" class="btn btn-warning">
                                Baca Surah
                            </router-link> -->
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <!-- END CARD -->
    </div>
    <!-- card -->
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
// import { resolve } from 'path'
// import { onMounted, ref } from 'vue'

export default {
    name: 'SurahVue',
    components: {},
    async setup() {
        const quran = ref([])

        // fetch data menggunakan json
        // const response = await fetch('http://quran-api.santrikoding.com/api/surah')
        // quran.value = await response.json()

        // fetch menggunakan axios
        await axios.get('http://quran-api.santrikoding.com/api/surah')
            .then(response => {
                quran.value = response.data
            }).catch(error => {
                console.log(error.response.data)
            })

        return {
            quran
        }
    },

    // code using onMounted
    // setup() {
    //     //reactive state
    //     let quran = ref([])

    //     //mounted
    //     onMounted(() => {
    //         //panggil function "getDataPosts"
    //         getDataQuran()
    //     })
    //     //function "getDataPosts"
    //     function getDataQuran() {
    //         axios.get('http://quran-api.santrikoding.com/api/surah')
    //             .then(response => {
    //                 quran.value = response.data
    //             }).catch(error => {
    //                 console.log(error.response.data)
    //             })
    //     }
    //     //return
    //     return {
    //         quran,
    //         getDataQuran,
    //     }
    // },

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