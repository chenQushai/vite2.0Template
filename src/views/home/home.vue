<template>
    <div>
        <HelloWorld></HelloWorld>
        {{data}}
    </div>
</template>

<script setup>
    import {onMounted, ref,reactive} from 'vue'
    import {useGetData} from '../../api/home/home'
</script>

<style lang="scss" scoped>
    .home {
        width: 100px;
        height: 200px;
        background-color: #44b449;
        padding: 1px;
        .inner {
            width: 20px;
            height: 30px;
            background-color: #606266;
        }
    }
</style>