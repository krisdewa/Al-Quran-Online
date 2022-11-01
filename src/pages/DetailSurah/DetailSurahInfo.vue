<template>
    <Suspense>
        <template #default>
            <DetailSurahVue />
        </template>
        <template #fallback>
            <!-- <LoadingVue /> -->
            <DetailSurahSkeleton />
        </template>
    </Suspense>
</template>
<script>
import DetailSurahVue from './DetailSurah.vue';
import DetailSurahSkeleton from '../../pages/Skeleton/DetailSurahSkeleton.vue';

export default {
    name: 'DetailSurah',
    components: {
        DetailSurahVue,
        DetailSurahSkeleton,
    },
};

</script>
<style scoped>

</style>