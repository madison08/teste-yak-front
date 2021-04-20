<template>
    <div id="wrapper">

        <Header/>

        <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">

                        <!-- <div class="row"> -->

            <router-view/>

                        <!-- </div> -->
                    </div>
                </div>
        </div>

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