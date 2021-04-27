<template>
    <div>
        <div class="col-sm-12">
            <div class="card-box">

                <h3 class="span">les especes</h3>

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
                        <router-link :to="{ name: 'addSpecy'}" class="btn btn-success">
                            Ajouter
                        </router-link>
                    </div>
                </div>
            

                <div class="separator"></div>
                <div class="mt-3">
                    <table class="table data-table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Production par mois</th>
                        <th scope="col">Esperance de vie</th>
                        <th scope="col">Prix de vente</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <div v-if="$apollo.loading">
                        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                    <tbody v-else>
                        <tr v-for="espece in Especes" :key="espece.id">
                            <!-- <span v-for="SingleSpece in espece" :key="SingleSpece.id"> -->
                        <th scope="row">{{ espece.name }}</th>
                        <td>{{ espece.monthlyProduction }}</td>
                        <td> {{ espece.esperanceDeVie }} </td>
                        <td>{{ espece.unitPrice  }}</td>
                        <td>
                            <div @click="$router.push({ name: 'specy.edit', params: { id: espece.id } })" class="btn btn-primary">editer</div> <!--<div @click="deleteMutation(espece.id)" class="myBtn bg-danger">supprimer</div>-->
                            <button @click="deleteMutation(espece.id)" type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
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
    const ALL_SPECY = gql `query{
                Especes{
                    id
                    name
                    esperanceDeVie
                    maturationTime
                    unitPrice
                    createdAt
                    monthlyProduction
                }
            }`;
    export default{
        name: 'Specy',

        data(){
            return{
                Especes: [],
                reloadNumber: 0

            }
        },

        methods: {
            deleteMutation(idEn){
                this.$apollo.mutate({
                    mutation: gql `
                        mutation ($id: ID!){
                            deleteEspece(id: $id)
                        }
                    ` ,

                    variables: {
                        id: idEn,
                    },

                    
                }).then((data) => {
                    console.log(data)

                    // this.$router.push({ path: '/' })
                    // this.$router.push({ path: '/specy' })
                }).catch((err) => {
                    console.log(err)
                });

                this.$router.go()
                
            }
        
        },
        
        apollo: {
            Especes: ALL_SPECY

            // fetchPolicy: 'cache-and-network',


        },
    }
</script>
<style lang="scss">

.data-table{
    td{
        text-align: center;
        // border: 1px solid red;
    }
    th{
        text-align: center;
    }
}

    .separator{
        margin-top: 15px;
        border: 1px solid #e2e2e2;
    }

    .sortAndAdd{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .sortBy{
        padding: 8px 12px;
        color: #333333;
        background-color: #e2e2e2;
        border: 1px solid #dddddd;
        cursor: pointer;
        border-radius: 5px;
    }

    .sortBy:focus,.sortBy:hover{
        border: 1px solid #bbbbbb;
    }

    .sortBy option{
        background-color: #fff;
        padding: 10px;
    }

    

    .lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
//   border: 1px solid red;
  text-align: center;
  /* margin: 0 auto; */
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #0D55BA;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>