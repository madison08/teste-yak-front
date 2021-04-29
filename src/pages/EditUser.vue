<template>
    <div>


        <div class="col-sm-12">
            <div class="card-box">

                <h3>Modifier l'espece {{ this.$route.params.id }} </h3>


                <h3>Ajouter un nouvel utilisateur</h3>

                <form action="" @submit.prevent="updateData">

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="">Nom</label>
                            <input v-model="formUser.firstname" type="text" class="form-control" id="" placeholder="Nom">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="">Prenom</label>
                            <input v-model="formUser.lastname" type="text" class="form-control" id="" placeholder="Nom">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="">Pseudo</label>
                            <input v-model="formUser.username" type="text" class="form-control" id="" placeholder="Pseudo">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="">Email</label>
                            <input v-model="formUser.email" type="email" class="form-control" id="" placeholder="Email">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="">Phone</label>
                            <input v-model="formUser.phone" type="text" class="form-control" id="" placeholder="phone">
                        </div>


                        <div class="form-group col-md-6">
                            <label for="">Mot de passe</label>
                            <input v-model="formUser.password" type="password" class="form-control" id="" placeholder="Mot de passe">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="exampleFormControlSelect1">Role</label>
                            <select v-model="formUser.role" class="form-control" id="exampleFormControlSelect1">
                                <option value="ADMIN">Admin</option>
                                <option value="USER">User</option>
                                <option value="ROOT" >Super Admin</option>
                            </select>
                        </div>

                    
                    </div>

                    <button type="submit" class="btn btn-primary col-lg-12">S'ENREGISTRER</button>


                </form>

            </div>

        </div>

    </div>
</template>
<script>
import gql from 'graphql-tag'
const EDIT_USER = gql `query users($id: ID!){
                users(id: $id){
                    id
                    username
                    firstname
                    lastname
                    email
                    password
                    status
                    phone
                },
            }`
    export default{
        name: 'EditUser',

        data(){
            return{
                idSingle: this.$route.params.id,
                formUser: {
                    firstname: '',
                    lastname: '',
                    username: '',
                    email: '',
                    phone: '',
                    password: '',
                    role: 'USER',
                }
            }
        },

        async mounted(){

            const queryData = await this.$apollo.query({
                query: gql `query users($id: ID!){
                users(id: $id){
                    id
                    username
                    firstname
                    lastname
                    email
                    password
                    status
                    phone
                },
            }`,

                variables:{
                    // return{
                        id: this.idSingle
                    // }
                }
            })

            console.log(queryData)

        },

        apollo:{
            query: EDIT_USER,

            variables(){
                return{
                    id: this.idSingle
                }
            }
        },

        methods: {
            updateData(){

                this.$apollo.mutate({
                    mutation: gql `
                        mutation updateEspece ($id: ID!,$username: String!, $firstname: String!, $lastname: String!, $email: String!, $password: String!, $status: Boolean!, $phone: String!,$role: Role!) {
                            updateEspece(id: $id,input: { name: $username, firstname: $firstname, lastname: $email, password: $password, status: $status}) {
                                id
                                username
                                firstname
                                lastname
                                email
                                password
                                status
                                phone
                            }
                        }
                    ` ,

                    variables: {
                        id: this.idSingle,
                        username: this.formUser.username,
                        firstname: this.formUser.firstname,
                        lastname: this.formUser.lastname,
                        email: this.formUser.email,
                        password: this.formUser.password,
                        status: this.formUser.status,
                        phone: this.formUser.phone
                    },

                    
                }).then((data) => {
                    console.log(data)

                    this.$router.push({ path: '/user' })

                    
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }
</script>