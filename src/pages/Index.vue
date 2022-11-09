<template>
    <HomeVue />

    <div v-if="errMsg" class="text-center mt-3 mb-4">{{ errMsg }}</div>
    <Suspense v-else>
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
import HomeVue from './Home.vue';
import SurahVue from './Surah.vue';
import FooterVue from '../components/Footer.vue';
import SurahSkeleton from './Skeleton/SurahSkeleton.vue';

export default {
    name: 'IndexVue',
    components: {
        HomeVue,
        SurahVue,
        FooterVue,
        SurahSkeleton,
    },
    setup() {
        const errMsg = ref(null)
        onErrorCaptured(() => {
            errMsg.value = 'Something went wrong!, Please try again later.'
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


