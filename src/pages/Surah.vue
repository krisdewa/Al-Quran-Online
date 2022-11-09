<template>

    <div class="container mb-2">
        <div class="row">
            <div class="col-md-12">
                <div class="input-group">
                    <input type="text" v-model="input" class="form-control p-3" placeholder="Ketik nama surat...">
                </div>
            </div>
        </div>
    </div>

    <div class="container mb-5">
        <div class="row">
            <div class="col-md-4 col-12" v-for="(surah, index) in filteredQuran" :key="index">
                <router-link :to="{ name: 'surah', params: { id: surah.nomor } }"
                    class="text-decoration-none text-dark">
                    <div class="card mt-4">
                        <div class="card-body card-custom">
                            <h2 class="float-end"> {{ surah.nama }} </h2>
                            <h5 class="card-title nama-latin"> {{ surah.nomor }}. {{ surah.nama_latin }}
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
    </div>
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
        const input = ref('');

        // fetch data menggunakan fetch API
        // const response = await fetch('http://quran-api.santrikoding.com/api/surah')
        // quran.value = await response.json()

        // await new Promise(resolve => setTimeout(resolve, 5000));

        // fetch data menggunakan axios
        await axios.get('https://equran.id/api/surat')
            .then(response => {
                quran.value = response.data
            }).catch(error => {
                console.log(error.response.data)
            })

        return {
            quran,
            input,
        }
    },
    computed: {
        filteredQuran() {
            // search nama_latin dan arti
            return this.quran.filter(quran => {
                return quran.nama_latin.toLowerCase().includes(this.input.toLowerCase()) || quran.arti.toLowerCase().includes(this.input.toLowerCase())
            })
        }
    }

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