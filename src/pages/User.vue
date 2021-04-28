<template>
    <div>


        <div class="col-sm-12">
            <div class="card-box">
                <h3>Nos utilisateur</h3>

                <div class="sortAndAdd mt-4">
                    <form action="" class="">

                        <!-- <div class="sortByBox"> -->
                            <select name="" class="sortBy">
                                <option value="Tri">Trier par</option>
                                <option value="Tri">First</option>
                                <option value="Tri">Two</option>
                                <option value="Tri">Second</option>
                            </select>
                        <!-- </div> -->

                    </form>

                    <div>
                        <router-link :to="{ name: 'addUser'}" class="btn btn-success">
                            Ajouter
                        </router-link>
                    </div>
                </div>

                <div class="separator"></div>

                <div>
                    <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Pseudo</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <div v-if="$apollo.loading">
                        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                    <tbody v-else>
                        <tr v-for="user in users" :key="user.id">
                            <!-- <span v-for="SingleSpece in espece" :key="SingleSpece.id"> -->
                        <th scope="row">{{ user.firstname }}</th>
                        <td>{{ user.lastname }}</td>
                        <td> {{ user.username }} </td>
                        <td>{{ user.email  }}</td>
                        <td>{{ user.role }}</td>
                        <td>
                            <div @click="$router.push({ name: 'specy.edit', params: { id: user.id } })" class="btn btn-primary">editer</div> <!--<div @click="deleteMutation(espece.id)" class="myBtn bg-danger">supprimer</div>-->
                            <button @click="deleteMutation(user.id)" type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                                Supprimer
                            </button>

                        </td>
                            <!-- </span> -->
                        </tr>
                    </tbody>
                    </table>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
import gql from 'graphql-tag'
    export default{
        name: 'User',

        data(){
            return{
                users: ''
            }
        },

        apollo: {
            users: gql `query{
                users{
                    id
                    username
                    firstname
                    lastname
                    email
                    role
                }
            }`
        },
    }
</script>