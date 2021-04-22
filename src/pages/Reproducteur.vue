<template>
    <div>


        <div class="col-sm-12">

            <div class="card-box">
                <h1>reproducteur</h1>

                <div class="bg bg-primary" v-for="user in users" :key="user.id">
                    <!-- {{ user }} -->

                    <ul v-for="userSingle in user" :key="userSingle.name">
                        <li>{{ userSingle }}</li>
                    </ul>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
import gql from 'graphql-tag'
    export default{
        name: 'Reproducteur',

        apollo: {
            users: gql `query{
                users{
                    id
                    username
                    password
                }
            }`
        }
    }

</script>