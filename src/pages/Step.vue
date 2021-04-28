<template>
    <div>


        <div class="col-sm-12">

            <div class="card-box">
                <h1 class="mb-3">Ajouter des etapes</h1>

            <fieldset>
                <legend>bggg</legend>
                <form @submit.prevent="saveData" action="">

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="">Nom de l'etape</label>
                            <input v-model="formSteps.name" type="text" class="form-control" id="" placeholder="Nom">
                        </div>
                        
                    </div>

                    <div class="mb-3">

                        <div class="custom-control custom-switch">
                            <input v-model="formSteps.status" type="checkbox" class="custom-control-input" id="customSwitch1">
                            <label class="custom-control-label" for="customSwitch1">{{ formSteps.status ? 'Actif' : 'Inactif'  }}</label>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">ENREGISTRER</button>


                </form>

                </fieldset>

                <h2 class="mt-4">Liste des etapes</h2>


                <div class="separator"></div>

                <!-- {{ steps }} -->

                <div class="mt-3">
                    <table class="table data-table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <div v-if="$apollo.loading">
                        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                    <tbody v-else>
                        <tr v-for="step in steps" :key="step.id">
                            <!-- <span > -->
                        <th scope="row">{{step.name}}</th>
                        <!-- <th scope="row">{{step.status}}</th> -->
                        <td>{{ step.status ? 'Actif' : 'Inactif' }}</td>
                        <td>
                            <div @click="$router.push({ name: 'specy.edit', params: { id: espece.id } })" class="btn btn-primary">editer</div> <!--<div @click="deleteMutation(espece.id)" class="myBtn bg-danger">supprimer</div>-->
                            <button @click="deleteData(step.id)" type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
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
        name: 'Step',

        data(){
            return{
                // users: ''
                steps: [],
                formSteps: {
                    name: '',
                    status: false
                }
            }
        },


        methods: {
            saveData(){

                this.$apollo.mutate({
                    mutation: gql `
                        mutation createStep ($name: String!, $status: Boolean!) {
                            createStep(input: { name: $name, status: $status}) {
                                id
                                name
                                status
                            }
                        }
                    ` ,

                    variables: {
                        name: this.formSteps.name,
                        status: this.formSteps.status
                    },


                    
                }).then((data) => {
                    console.log(data)

                    this.$router.go()

                    
                }).catch((err) => {
                    console.log(err)
                });

            },

            deleteData(idEn){

                this.$apollo.mutate({
                    mutation: gql `
                        mutation ($id: ID!){
                            deleteStep(id: $id)
                        }
                    ` ,

                    variables: {
                        id: idEn,
                    },

                    
                }).then((data) => {
                    console.log(data)

                    this.$router.go()


                    // this.$router.push({ path: '/' })
                    // this.$router.push({ path: '/specy' })
                }).catch((err) => {
                    console.log(err)
                });
            }

        },


        apollo: {
            steps: gql `
                query{
                    steps{
                    id
                    name
                    status
                    }
                    
                }
            `
        },


    }

</script>