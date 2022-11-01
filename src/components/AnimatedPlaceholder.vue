<template>
    <div class="placeholder">
        &nbsp;
    </div>
</template>
<script>
export default {
    name: 'AnimatedPlaceholder',
    props: {
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '100%',
        },
        borderRadius: {
            type: String,
            default: '0',
        },
    },
}
</script>

<style scoped>
@keyframes bgAnimate {
    0% {
        background-position: 50% 0%;
    }

    100% {
        background-position: -150% 0;
    }
}

.placeholder {
    height: v-bind(height);
    width: v-bind(width);
    border-radius: v-bind(borderRadius);

    background-image: linear-gradient(to right,
            #f6f7f8 8%,
            #e9ebee 18%,
            #f6f7f8 33%);
    background-size: 200% 100%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    animation: bgAnimate 1.2s linear infinite;
}
</style>