<template>
    <main class="container mt-custom ">
        <div class="bg-success text-white p-5 rounded text-center shadow">
            <h1>Al-Qur'an Online 📖</h1>
            <p class="lead content">
                Baca Al-Qur'an secara Online dimana dan kapanpun saja dengan mudah
                <br>
                Al-Qur'an ini yang bersumber dari
                <a href="https://quran.kemenag.go.id/" class="text-decoration-none text-warning"
                    target="_blank">Kementrian Agama Republik Indonesia
                </a> dengan murottal
                <strong>Misyari Rasyid Al-'Afasi</strong>. <br>
                Untuk informasi lebih lanjut tentang aplikasi ini, silakan kunjungi repositori github saya di
                <a href="https://github.com/krisdewa" class="text-decoration-none text-warning"
                    target="_blank">KrisDewa</a>
            </p>
            <!-- <a class="btn btn-dark mt-2" href="https://krisproject.my.id" target="_blank" role="button">SELENGKAPNYA</a> -->
        </div>
    </main>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="input-group">
                    <input type="text" class="form-control p-3" placeholder="Ketik nama surat dan enter..">
                </div>
            </div>
        </div>
    </div>

    <div v-if="errMsg">{{ errMsg }}</div>
    <Suspense>
        <template #default>
            <SurahVue />
        </template>
        <template #fallback>
            <SurahSkeleton />
        </template>
    </Suspense>

    <FooterVue />
</template>

<script>
import { onErrorCaptured, ref } from 'vue';
import SurahVue from './Surah.vue';
import FooterVue from '../components/Footer.vue';
import SurahSkeleton from './Skeleton/SurahSkeleton.vue';

export default {
    name: 'IndexVue',
    components: {
        SurahVue,
        FooterVue,
        SurahSkeleton,
    },
    setup() {
        const errMsg = ref(null)
        onErrorCaptured(() => {
            errMsg.value = 'Something went wrong!'
        })

        return {
            errMsg
        }
    },
}
</script>

<style scoped>
.mt-custom {
    margin-top: 95px;
}

@media screen and (max-width: 768px) {
    .content {
        font-size: 12px;
    }
}
</style>


