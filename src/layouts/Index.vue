<template>
    <div>

        <Header/>

            <router-view/>

        <Footer/>

    </div>
</template>
<script>
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
    export default{
        name: 'AppLayout',

        components: {
            Header,
            Footer
        }
    }
</script>
<style>

</style>