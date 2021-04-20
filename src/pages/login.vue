<template>
    <div class="">


        <div class="account-pages mt-5 mb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="text-center mb-5">
                            <a href="index.html" class="logo">
                                <img src="assets/images/logo-dark.png" alt="" height="22" class="logo-dark mx-auto">
                            </a>
                        </div>
                        <div class="card">

                            <div class="card-body p-4">
                                
                                <div class="text-center mb-4">
                                    <h4 class="text-uppercase mt-0">Se connecter</h4>
                                </div>

                                <form action="#">

                                    <div class="form-group mb-3">
                                        <label for="username">Nom d'utilisateur</label>
                                        <input class="form-control" type="text" id="username" required="" placeholder="Nom d'utilisateur">
                                    </div>

                                    <div class="form-group mb-3">
                                        <label for="password">Mot de passe</label>
                                        <input class="form-control" type="password" required="" id="password" placeholder="Mot de passe">
                                    </div>

                                    <!-- <div class="form-group mb-3">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="checkbox-signin" checked>
                                            <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                        </div>
                                    </div> -->

                                    <div class="form-group mb-0 text-center">
                                        <button class="btn btn-primary btn-block" type="submit"> Se connecter </button>
                                    </div>

                                </form>

                            </div> <!-- end card-body -->
                        </div>
                        <!-- end card -->
                        <!-- end row -->

                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end page -->
    

    </div>
</template>
<script>
    export default{
        name: 'login'
    }
</script>
<style>
    body{
        background-image: url('../assets/fermeblur.jpg');
        background-size: cover;
    }
</style>