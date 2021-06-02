<template>
    <div>
        <HelloWorld></HelloWorld>
        {{data}}
    </div>
</template>

<script setup>
    import {onMounted, ref} from 'vue'
    import {useGetData} from '../../api/home/home'
    import {CheckMobilePhone} from '../../utils/exp'

    const {data, task} = useGetData();
    task();
    console.log(CheckMobilePhone('15308192039'))
</script>

<style scoped>

</style>