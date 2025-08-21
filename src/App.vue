<template>
    <div class="main-background">
        <router-view></router-view>
    </div>
</template>

<script setup>
import Page from './page/index.vue';
import { useInactivityTimer } from '../src/services/useInactivityTimer'

useInactivityTimer();
</script>
