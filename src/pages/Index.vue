<template>
    <main class="container mt-custom ">
        <div class="bg-success text-white p-5 rounded text-center shadow">
            <h1>Al-Qur'an Online 📖</h1>
            <p class="lead">
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

    <Suspense>
        <template #default>
            <SurahVue />
        </template>
        <template #fallback>
            <LoadingVue />
        </template>
    </Suspense>

    <FooterVue />
</template>

<style scoped>
.mt-custom {
    margin-top: 95px;
}
</style>

<script>
import SurahVue from './Surah.vue';
import LoadingVue from '../components/Loading.vue';
import FooterVue from '../components/Footer.vue';

export default {
    name: 'IndexVue',
    components: {
        SurahVue,
        LoadingVue,
        FooterVue,
    }
}
</script>

