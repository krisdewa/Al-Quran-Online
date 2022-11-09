<template>
    <Suspense>
        <template #default>
            <DetailTafsirVue />
        </template>
        <template #fallback>
            <DetailTafsirSkeleton />
        </template>
    </Suspense>
</template>
<script>
import DetailTafsirVue from './DetailTafsir.vue';
import DetailTafsirSkeleton from '../Skeleton/DetailTafsirSkeleton.vue';

export default {
    name: 'DetailTafsir',
    components: {
        DetailTafsirVue,
        DetailTafsirSkeleton,
    },
};

</script>
<style scoped>

</style>