<template>
    <HomeVue />

    <div v-if="errMsg" class="text-center mt-5 mb-5 h3">{{ errMsg }}</div>
    <Suspense v-else>
        <template #default>
            <JuzVue />
        </template>
        <template #fallback>
            <!-- <div class="text-center mb-5 mt-5 h3">Loading...</div> -->
            <SurahSkeleton />
        </template>
    </Suspense>

    <FooterVue />
</template>

<script>
import { onErrorCaptured, ref } from 'vue';
import HomeVue from '../Home.vue';
import JuzVue from './Juz.vue';
import FooterVue from '../../components/Footer.vue';

import SurahSkeleton from '../Skeleton/SurahSkeleton.vue';

export default {
    name: 'IndexVue',
    components: {
        HomeVue,
        JuzVue,
        FooterVue,
        SurahSkeleton,
    },
    setup() {
        const errMsg = ref(null)
        onErrorCaptured(() => {
            // errMsg.value = 'Something went wrong!, Please try again later.'
            errMsg.value = 'Coming Soon!'
        })

        return {
            errMsg
        }
    },
}
</script>

<style scoped>

</style>


