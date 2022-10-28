<template>
    <main class="container mt-custom">
        <div class="bg-light p-5 rounded text-center shadow">
            <h1>Al-Qur'an Online 📖</h1>
            <p class="lead">
                Baca Al-Qur'an secara Online dimana dan kapanpun saja dengan mudah
                <br>
                Al-Qur'an ini yang bersumber dari
                <a href="#" class="text-decoration-none">Kementrian Agama Republik Indonesia
                </a> dengan murottal
                <strong>Misyari Rasyid Al-'Afasi</strong>.
            </p>
            <!-- <a class="btn btn-dark mt-2" href="https://krisproject.my.id" target="_blank" role="button">SELENGKAPNYA</a> -->
        </div>
    </main>
    <SurahVue />
</template>

<style scoped>
.mt-custom {
    margin-top: 80px;
}
</style>

<script>
import SurahVue from './Surah.vue';

export default {
    name: 'IndexVue',
    components: {
        SurahVue
    }
}
</script>

