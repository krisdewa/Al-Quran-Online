<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-warning fixed-top bg-warning py-3">
            <div class="container">
                <a class="navbar-brand" href="#">AL-QUR'AN ONLINE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">HOME</router-link>
                        </li>
                    </ul>
                    <a href="https://krisproject.my.id" class="btn btn-success float-end" target="_blank">KRISPROJECT 🔗
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.navbar-brand {
    font-weight: bold;
}
</style>

<script>
export default {
    name: 'NavbarVue',
}
</script>