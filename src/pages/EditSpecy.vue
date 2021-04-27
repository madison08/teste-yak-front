<template>
    <div>


        <div class="col-sm-12">
            <div class="card-box">
                <h3>Modifier l'espece {{ this.$route.params.id }} </h3>

                <!-- <span v-for="espece in Especes" :key="espece.id"> -->
                    <!-- <span v-if="espece.id == idSingle"> {{ espece.name }}  -->

                <form action="#" @submit.prevent="updateData" class="mt-3">

                    <fieldset>
                        <legend>Especes</legend>


                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Nom :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.name"  type="text" class="form-control" id="" placeholder="">  <!--v-model="formSpecy.name" -->
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Esperance de vie :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.esperanceDeVie" type="number" class="form-control" id="" placeholder="">  <!-- v-model="formSpecy.esperanceDeVie" -->
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Temps de maturation :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.maturationTime" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Temps d'incubation :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.incubationTime" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Prix unitaire :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.unitPrice" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Production mensuel :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.monthlyProduction" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Production hebdomadaire :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.weeklyProduction" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Uniter par production :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.perUnitProdutction" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Pourcentage Reproducteur perdue :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.reproductorLossPercentage" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Pourcentage d'adulte perdue :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.adultLossPercentage" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Pourcentage d'enfant perdue :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input v-model="formSpecy.childLossPercentage" type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>

                        

                    </fieldset>


                    <button type="submit" class="col-lg-12 btn btn-primary mt-4">ENREGISTRER</button>



                    

                </form>

                    <!-- </span>

                </span> -->


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
                    incubationTime
                    unitPrice
                    monthlyProduction
                    weeklyProduction
                    perUnitProdutction
                    reproductorLossPercentage
                    adultLossPercentage
                    adultLossPercentage
                    childLossPercentage
                    createdAt
                    monthlyProduction
                },
            }`;

    export default{
        name: 'AddSpecy',

        data(){
            return{
                Especes: [],
                idSingle: this.$route.params.id,
                formSpecy: {
                    name: '',
                    esperanceDeVie: '',
                    maturationTime: '',
                    incubationTime: '',
                    unitPrice: '',
                    monthlyProduction: '',
                    weeklyProduction: '',
                    perUnitProdutction: '',
                    reproductorLossPercentage: '',
                    adultLossPercentage: '',
                    childLossPercentage: '',
                }
            }
        },

        async mounted(){

            const queryData = await this.$apollo.query({
                query: ALL_SPECY
            })

            console.log(queryData)

            for (const key in this.Especes) {
                    if (Object.hasOwnProperty.call(this.Especes, key)) {
                        const element = this.Especes[key];

                        if(element.id == this.$route.params.id){
                            console.log(element)
                            this.formSpecy.name = element.name,
                            this.formSpecy.esperanceDeVie = element.esperanceDeVie,
                            this.formSpecy.maturationTime = element.maturationTime,
                            this.formSpecy.incubationTime = element.incubationTime,
                            this.formSpecy.unitPrice = element.unitPrice,
                            this.formSpecy.monthlyProduction = element.monthlyProduction,
                            this.formSpecy.weeklyProduction = element.weeklyProduction,
                            this.formSpecy.perUnitProdutction = element.perUnitProdutction,
                            this.formSpecy.reproductorLossPercentage = element.reproductorLossPercentage,
                            this.formSpecy.adultLossPercentage = element.adultLossPercentage,
                            this.formSpecy.childLossPercentage = element.childLossPercentage
                        }
                        
                    }
                }
        },

        

        methods: {


            updateData(){

                this.$apollo.mutate({
                    mutation: gql `
                        mutation updateEspece ($id: ID!,$name: String!, $esperanceDeVie: Int!, $maturationTime: Int!, $incubationTime: Int!, $unitPrice: Int!, $monthlyProduction: Int!, $weeklyProduction: Int!, $perUnitProdutction: Int!, $reproductorLossPercentage: Float!, $adultLossPercentage: Float!, $childLossPercentage: Float!  ) {
                            updateEspece(id: $id,input: { name: $name, esperanceDeVie: $esperanceDeVie, maturationTime: $maturationTime, incubationTime: $incubationTime, unitPrice: $unitPrice, monthlyProduction: $monthlyProduction, weeklyProduction: $weeklyProduction, perUnitProdutction: $perUnitProdutction, reproductorLossPercentage: $reproductorLossPercentage, adultLossPercentage: $adultLossPercentage, childLossPercentage: $childLossPercentage }) {
                                id
                                name
                                esperanceDeVie
                                maturationTime
                                incubationTime
                                unitPrice
                                monthlyProduction
                                weeklyProduction
                                perUnitProdutction
                                reproductorLossPercentage
                                adultLossPercentage
                                childLossPercentage
                            }
                        }
                    ` ,

                    variables: {
                        id: this.idSingle,
                        name: this.formSpecy.name,
                        esperanceDeVie: this.formSpecy.esperanceDeVie,
                        maturationTime: this.formSpecy.maturationTime,
                        incubationTime: this.formSpecy.incubationTime,
                        unitPrice: this.formSpecy.unitPrice,
                        monthlyProduction: this.formSpecy.monthlyProduction,
                        weeklyProduction: this.formSpecy.weeklyProduction,
                        perUnitProdutction: this.formSpecy.perUnitProdutction,
                        reproductorLossPercentage: this.formSpecy.reproductorLossPercentage,
                        adultLossPercentage: this.formSpecy.adultLossPercentage,
                        childLossPercentage: this.formSpecy.childLossPercentage
                    },


                    
                }).then((data) => {
                    console.log(data)

                    this.$router.push({ path: '/specy' })

                    
                }).catch((err) => {
                    console.log(err)
                });
            }
        },


        apollo: {
            Especes: ALL_SPECY
        },
    }
</script>
<style>

    fieldset{
        margin-top: 25px;
        border: 1px solid #000;
        padding: 15px;
        border-radius: 10px;
    }

    legend {
        text-transform: uppercase;
        border-radius: 10px;
        background-color: #000;
        color: #fff;
        padding: 3px 6px;
    }

</style>