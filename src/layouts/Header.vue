<template>
    <div>
        <!-- top header -->
        <div class="navbar-custom">
                <ul class="list-unstyled topnav-menu float-right mb-0">
        
                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle  waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i class="fe-bell noti-icon"></i>
                            <span class="badge badge-danger rounded-circle noti-icon-badge">9</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-lg">

                            <!-- item-->
                            <div class="dropdown-item noti-title">
                                <h5 class="m-0">
                                    <span class="float-right">
                                        <a href="" class="text-dark">
                                            <small>Tout supprimer</small>
                                        </a>
                                    </span>Notification
                                </h5>
                            </div>

                            <div class="slimscroll noti-scroll">

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                    <div class="notify-icon">
                                        <img src="assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                    <p class="notify-details">Cristina Pride</p>
                                    <p class="text-muted mb-0 user-msg">
                                        <small>Hi, How are you? What about our next meeting</small>
                                    </p>
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-primary">
                                        <i class="mdi mdi-comment-account-outline"></i>
                                    </div>
                                    <p class="notify-details">Caleb Flakelar commented on Admin
                                        <small class="text-muted">1 min ago</small>
                                    </p>
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon">
                                        <img src="assets/images/users/user-4.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                    <p class="notify-details">Karen Robinson</p>
                                    <p class="text-muted mb-0 user-msg">
                                        <small>Wow ! this admin looks good and awesome design</small>
                                    </p>
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-warning">
                                        <i class="mdi mdi-account-plus"></i>
                                    </div>
                                    <p class="notify-details">New user registered.
                                        <small class="text-muted">5 hours ago</small>
                                    </p>
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-info">
                                        <i class="mdi mdi-comment-account-outline"></i>
                                    </div>
                                    <p class="notify-details">Caleb Flakelar commented on Admin
                                        <small class="text-muted">4 days ago</small>
                                    </p>
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-secondary">
                                        <i class="mdi mdi-heart"></i>
                                    </div>
                                    <p class="notify-details">Carlos Crouch liked
                                        <b>Admin</b>
                                        <small class="text-muted">13 days ago</small>
                                    </p>
                                </a>
                            </div>

                            <!-- All-->
                            <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                                Voir tout
                                <i class="fi-arrow-right"></i>
                            </a>

                        </div>
                    </li>

                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="assets/images/user.png" alt="user-image" class="rounded-circle">
                            <span class="pro-user-name ml-1">
                             <!-- utilisateur connecter   -->
                            <span v-for="user in users" :key="user.id">
                                <span v-for="userSingle in user" :key="userSingle.name">
                                    <span v-if="userSingle == userConnected">{{ userSingle }}</span>
                                </span>
                            </span> <i class="mdi mdi-chevron-down"></i> 
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                            <!-- item-->
                            <div class="dropdown-header noti-title">
                                <h6 class="text-overflow m-0">Bienvenue !</h6>
                            </div>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="fe-user"></i>
                                <span>Mon compte</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="fe-settings"></i>
                                <span>Parametre</span>
                            </a>

                            <!-- item-->
                            <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="fe-lock"></i>
                                <span>Lock Screen</span>
                            </a> -->

                            <div class="dropdown-divider"></div>

                            <!-- item-->
                            <a href="#" @click.prevent="logout" class="dropdown-item notify-item">
                                <i class="fe-log-out"></i>
                                <span>Deconnexion</span>
                            </a>

                        </div>
                    </li>


                </ul>

                <!-- LOGO -->
                <div class="logo-box">
                    <a href="index.html" class="logo logo-dark text-center">
                        <span class="logo-lg">
                            <span id="title-yak">yakassap</span>
                            
                            <!-- <img src="assets/images/logo-dark.png" alt="" height="16"> -->
                        </span>
                        <!--
                        <span class="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="24">
                        </span> -->
                    </a>
                    <a href="index.html" class="logo logo-light text-center">
                        <span class="logo-lg">
                            <img src="assets/images/logo-light.png" alt="" height="16">
                        </span>
                        <span class="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="24">
                        </span>
                    </a>
                </div>

                <ul class="list-unstyled topnav-menu topnav-menu-left mb-0">
                    <li>
                        <button class="button-menu-mobile disable-btn waves-effect">
                            <i class="fe-menu"></i>
                        </button>
                    </li>

                    <li>
                        <h4 class="page-title-main">Tableau de bord</h4>
                    </li>
        
                </ul>

            </div>
            <!-- end Topbar -->


            <div class="left-side-menu">

                <div class="slimscroll-menu">

                    <!-- User box -->
                    <div class="user-box text-center">
                        <img src="assets/images/yak-logo.png" alt="user-img" title="Yakassap" class=" img-thumbnail ">
                        <div class="dropdown">
                            <!-- <a href="#" class="user-name dropdown-toggle h5 mt-2 mb-1 d-block" data-toggle="dropdown"  aria-expanded="false">Consommons bio pour une vie saine</a> -->
                            <div class="dropdown-menu user-pro-dropdown">

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fe-user mr-1"></i>
                                    <span>My Account</span>
                                </a>
    
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fe-settings mr-1"></i>
                                    <span>Settings</span>
                                </a>
    
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fe-lock mr-1"></i>
                                    <span>Lock Screen</span>
                                </a>
    
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fe-log-out mr-1"></i>
                                    <span>Logout</span>
                                </a>
    
                            </div>
                        </div>
                        <p class="text-muted slogan-text">Consommons bio pour une vie saine</p>
                        <!-- <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="#" class="text-muted">
                                    <i class="mdi mdi-cog"></i>
                                </a>
                            </li>

                            <li class="list-inline-item">
                                <a href="#">
                                    <i class="mdi mdi-power"></i>
                                </a>
                            </li>
                        </ul> -->
                    </div>

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">

                        <ul class="metismenu" id="side-menu">

                            <!-- <li class="menu-title">Navigation</li> -->

                            <li>
                                <router-link :to="{name: 'dashboard'}">
                                    <i class="mdi mdi-view-dashboard"></i>
                                    <span>Tableau de bord</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link :to="{name: 'report'}">
                                    <i class="mdi mdi-chart-pie"></i>
                                    <span>Reporting</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link :to="{name: 'step'}">
                                    <i class="mdi mdi-bookmark"></i>
                                    <span>Etapes</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link :to="{name : 'specy' }">
                                    <i class="mdi mdi-pin"></i>
                                    <span>Especes</span>
                                </router-link>
                            </li>

                            <!-- <li>
                                <a href="#">
                                    <i class="mdi mdi-page-layout-sidebar-left"></i>
                                    <span> Categorie</span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li><a href="layouts-vertical.html">Categorie 1</a></li>
                                    <li><a href="layouts-menubar-dark.html">Categorie 2</a></li>
                                    <li><a href="layouts-center-menu.html">Categorie 3</a></li>
                                    <li><a href="layouts-menu-drop-dark.html">Categorie 4</a></li>
                                    <li><a href="layouts-preloader.html">Categorie 5</a></li>
                                </ul>
                            </li> -->

                            
                            <li>
                                <router-link :to="{name : 'saisie' }">
                                    <i class="mdi mdi-border-color"></i>
                                    <span>Saisie</span>
                                </router-link>
                            </li>
                            
                            
                            <li>
                                <router-link :to="{name: 'historique'}">
                                    <i class="mdi mdi-border-color"></i>
                                    <span> Historique de saisir </span>
                                </router-link>
                            </li>

                            <li>
                                <router-link :to="{name: 'user'}">
                                    <i class="mdi mdi-account"></i>
                                    <span>Utilisateurs</span>

                                </router-link>
                            </li>
                        </ul>

                    </div>
                    <!-- End Sidebar -->

                    <div class="clearfix"></div>

                </div>
                <!-- Sidebar -left -->

            </div>
            <!-- Left Sidebar End -->

    </div>
</template>
<script>
import gql from 'graphql-tag'
import { onLogout } from '@/vue-apollo.js'
    export default{
        name: 'Header',

        data(){
            return{
                // users: null
                userConnected: localStorage.getItem('username')
            }
        },

        apollo: {
            users: gql `query{
                users{
                    username
                }
            }`
        },

        methods: {
            logout(){
                onLogout(this.$apollo.provider.defaultClient)
                this.$router.push('/login')

            },
        }
    }
</script>
<style>

</style>