<template>
    <main class="container mt-custom ">
        <div class="home bg-success text-white rounded text-center shadow mb-4">
            <h1>Al-Qur'an Online 📖</h1>
            <p class="lead content">
                Baca Al-Qur'an secara Online dimana dan kapanpun saja dengan mudah
                <br> Al-Qur'an ini yang bersumber dari
                <a href="https://quran.kemenag.go.id/" class="text-decoration-none text-warning"
                    target="_blank">Kementrian Agama Republik Indonesia
                </a> dengan murottal
                <strong>Misyari Rasyid Al-'Afasi</strong>. <br>
                Untuk informasi lebih lanjut tentang aplikasi ini, silakan kunjungi repositori github saya di
                <a href="https://github.com/krisdewa" class="text-decoration-none text-warning"
                    target="_blank">KrisDewa</a>
            </p>
            <!-- <div>
                <router-link :to="{ name: 'home' }" class="btn btn-warning m-1">Surah</router-link>
                <router-link :to="{ name: 'juz' }" class="btn btn-warning m-1">Juz</router-link>
            </div> -->
        </div>
    </main>
</template>

<script>
export default {
    name: 'HomeVue',
    components: {},
}
</script>

<style scoped>
.mt-custom {
    margin-top: 95px;
}

.home {
    padding: 30px;
}

@media screen and (max-width: 768px) {
    .home {
        padding: 15px;
    }

    .content {
        font-size: 15px;
    }
}
</style>