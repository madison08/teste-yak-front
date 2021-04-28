<template>
    <div>


        <div class="col-sm-12">
            <div class="card-box">

                <h3>Ajouter un nouvel utilisateur</h3>

                <form action="" @submit.prevent="saveData">

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
                            {{formUser.role }}
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
    export default{
        name: 'AddUser',

        data(){
            return{
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

        methods: {
            saveData(){

                this.$apollo.mutate({
                    mutation: gql `
                        mutation createUser ($firstname: String!, $lastname: String!, $username: String!, $email: String!, $phone: String!, $password: String!, $role: Role!) {
                            createUser(input: { firstname: $firstname, lastname: $lastname, username: $username, email: $email, phone: $phone, password: $password, role: $role}) {
                                id
                                firstname
                                lastname
                                username
                                email
                                phone
                                password
                                role
                            }
                        }
                    ` ,

                    variables: {
                        firstname: this.formUser.firstname,
                        lastname: this.formUser.lastname,
                        username: this.formUser.username,
                        email: this.formUser.email,
                        password: this.formUser.password,
                        phone: this.formUser.phone,
                        role: this.formUser.role
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