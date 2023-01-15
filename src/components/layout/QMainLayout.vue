<script setup>
import QHeader from '@/components/blocks/panel/QHeader.vue';
import QNavs from '@/components/blocks/panel/QNavs.vue';
</script>
<template>
    <q-header/>
    <div class="flex flex-col lg:flex-row">
        <q-navs/>
        <main class="w-full bg-slate-50 mb-12">
            <router-view></router-view>
        </main>
    </div>
</template>