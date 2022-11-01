<template>
    <Suspense>
        <template #default>
            <DetailSurahVue />
        </template>
        <template #fallback>
            <LoadingVue />
        </template>
    </Suspense>
</template>
<script>
import DetailSurahVue from './DetailSurah.vue';
import LoadingVue from '../../components/Loading.vue';

export default {
    name: 'DetailSurah',
    components: {
        DetailSurahVue,
        LoadingVue,
    },
};

</script>
<style scoped>

</style>