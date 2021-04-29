<template>
    <div id="saisies">

        <div class="col-sm-12">
            <div class="card-box">

                <form @submit.prevent="saveData" action="" method="" class="form">
                    
                    <!-- {{ steps }} -->

                    <!-- {{ especes }} -->

                    <!-- {{ newStep.data }} -->

                    <!-- {{ stepName }}
                    {{ stepID }}

                    {{ maps }} -->

                    <!-- {{ emptyTable }} -->

                    <div class="formTitle">
                        Renseigner les champs etape par etape
                    </div>

                    <p>Periode ou date :</p>

                    <!-- <datetime format="YYYY-MM-DDTH:i:sZ" class="form-control w-full" @input="updateEffectiveDate" v-model="form.effectiveDate" disabled></datetime> -->

                    <div class="date-block">
                        Du <input v-model="formData.startDate" type="date" name="" id="start-date">
                        Au <input v-model="formData.endDate" type="date" name="" id="end-date">
                    </div>

                    {{ formData.startDate }}
                    {{ formData.endDate }}

                    <!-- <input v-if="startDate != ''" type="text" placeholder="operation"> -->
                    <transition name="fade">

                    <div v-if="formData.startDate != '' && formData.endDate != '' " class="formItem">

                        <!-- <hr style="color: #000;height: 15px;"> -->



                        <select v-model="formData.selectStep" @change="onChangeStepValue" name="" id="" class="operation">
                            <option v-for="step in steps" :key="step.id" :value="step.id" >
                                {{ step.name }}
                            </option>
                        </select>

                        {{ formData.selectStep  }}
                    </div>

                    </transition>



                    <transition name="fade">

                    <div v-if="formData.selectStep != '' && formData.start != '' && formData.endDate != ''" class="formItem">

                        <select v-model="formData.selectEspece" @change="onChangeSpecyValue" name="" id="" class="espece">
                            <option v-for="espece in especes" :key="espece.id" :value="espece.id">
                                {{ espece.name }}
                            </option>
                        </select>

                        {{ formData.selectEspece  }}
                    </div>

                    </transition>
                        
                        

                    <transition name="fade">

                            <fieldset v-if="formData.selectEspece !== ''" class="fieldsetForm mt-2">

                                <div v-if="formData.selectEspece !== '' && this.nameStepCurrent == 'Ramassage'" class="formItem">

                                        <!-- <legend class="legendForm">Eclosion</legend> -->
                                        <input type="number" v-model="formData.quantity" placeholder="Quantiter" class="formQuantite">

                                </div>

                                <button v-if="formData.selectSpecy !== ''" type="submit" class="btn btn-primary col-lg-12 mt-3">ENREGISTRER</button>
                            </fieldset>


                    </transition>


                </form>

            </div>
        </div>

    </div>
</template>
<script>
import gql from 'graphql-tag'
import moment from 'moment'

    export default{
        name: 'saisies',

        data(){
            return{
                // stepTest: STEP,
                stepName: [],
                stepID: [],
                nameStepCurrent: '',
                nameSpecyCurrent: '',
                steps: [],
                newStep:[],
                newSpecy: [],
                especes: [],
                formData: {
                    effectiveDate: '',
                    startDate: '',
                    endDate: '',
                    selectStep: '',
                    selectEspece: '',
                    quantity: ''

                }
            }
        },

        async mounted(){


            const queryData = await this.$apollo.query({
                query: gql `
                    query{
                        steps{
                        id
                        name
                        status
                        }
                        
                    }
                `,

                // variables:{
                //     // return{
                //         id: this.idSingle
                //     // }
                // }
            })

            const queryDataSpecy = await this.$apollo.query({
                query: gql `
                    query{
                        especes{
                            id
                            name
                            esperanceDeVie
                            maturationTime
                            unitPrice
                            createdAt
                            monthlyProduction
                        }
                    }
                `,

                // variables:{
                //     // return{
                //         id: this.idSingle
                //     // }
                // }
            })

            // console.log(queryDataSpecy)

            this.newSpecy = queryDataSpecy

            console.log(this.newSpecy)

            



            // console.log(queryData.data)

            this.newStep = queryData

            // console.log(this.newStep)

            

//             for(let i = 0; i < this.newStep.data.steps.length; i++ ){
//                 // this.emptyTable.push(this.newStep.data.steps[i].name)
// // console.log(this.newStep.data.steps[i]["id"])
// // let id = this.newStep.data.steps[i]["id"]

//                 // console.log(this.newStep.data.steps[i])

//                // for(var key in this.newStep.data.steps[i]){
//                     // console.log(key , ' -- ' , this.newStep.data.steps[i][key] )

//                     // this.map[key] = key

//                     // this.stepID.push(this.newStep.data.steps[i]["id"])

//                     // this.stepName.push(this.newStep.data.steps[i]["name"])

//                     // this.maps[this.stepName[i]] = this.maps[this.stepID[i]] 
// // this.maps = {
// //     [id]: this.newStep.data.steps[i]["name"]

//                     // this.maps.set(id, this.newStep.data.steps[i]["name"] )
// // }
//                    this.map[id] = this.newStep.data.steps[i]["name"]

//                     console.log(this.maps)

//                    // console.log(this.newStep.data.steps[i][key])

//                     // for(){

//                     // }

//                     // this.emptyTable

//                     // this.map.set(key, this.newStep.data.steps[i][key])


//                // }

//             }


        },

        methods: {

            updateEffectiveDate (d) {
                this.form.effectiveDate = moment(d).format('YYYY-MM-DDThh:mm:ss')+'Z'
            },


            onChangeStepValue(){
                this.nameStepCurrent = (this.newStep.data.steps.find(item => item.id === this.formData.selectStep )).name

                // this.nameStepCurrent = (this.newStep.data.steps.find(item => item.id === this.formData.selectStep )).name


                console.log(this.nameStepCurrent)

            },

            onChangeSpecyValue(){
                this.nameSpecyCurrent = (this.newSpecy.data.especes.find(item => item.id === this.formData.selectEspece )).name

                console.log(this.nameSpecyCurrent)
            },

            saveData(){

                //  let data = this.formData;

                if(this.nameStepCurrent == 'Ramassage'){
                    

                    this.$apollo.mutate({
                    mutation: gql `
                        mutation createGroup ($startDate: Time!, $endDate: Time!, $step: ID!, $espece: ID!, $quantity: Int!, ) {
                            createEspece(input: { startDate: $startDate, endDate: $endDate, step: $step, espece: $espece, quantity: $quantity }) {
                                id
                                startDate
                                endDate
                                quantity
                            }
                        }
                    ` ,

                    variables: {
                        startDate: this.formData.startDate,
                        endDate: this.formData.endDate,
                        step: this.formData.selectStep,
                        espece: this.formData.selectEspece,
                        quantity: this.formData.quantity
                    },

                    
                }).then((data) => {
                    console.log(data)

                    this.$router.push({ path: '/specy' })

                    
                }).catch((err) => {
                    console.log(err)
                });

                }

            }
        },

        // mounted(){
        //     console.log(this.stepTest)
        // },

        apollo: {
            steps: {
                query: gql `
                    query{
                        steps{
                        id
                        name
                        status
                        }
                        
                    }
            `,
            },

            especes:{
                query: gql `
                    query{
                        especes{
                            id
                            name
                            esperanceDeVie
                            maturationTime
                            unitPrice
                            createdAt
                            monthlyProduction
                        }
                    }
                `
            }


        },
    }
</script>
<style lang="scss">
    #saisies{
        .form{
            display: flex;
            flex-direction: column;
            font-size: 16px;
            // background-color: red;
        }
        .form *{
            box-sizing: border-box;
            line-height: 1.5;
            
        }
        input:focus{
            border: 2px solid #000;
            // border-radius: 15px;
            background-color: none;
        }
        .formTitle{
            font-size: 1.5em;
            font-weight: 600;
        }

        .formItem{
            margin-top: 15px;
        }

        #start-date,#end-date{
            padding: 10px;
            // background-color: red;
            border: 1px solid #000;
            // border-radius: 10px;

        }

        .operation,.espece,.formQuantite{
            padding: 10px;
            border: 1px solid #000;
            // border-radius: 10px;
        }

        .fade-enter-active, .fade-leave-active {
        transition: opacity 0.7s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        }

        .fieldsetForm{
            border: 1px solid #000;
            border-radius: none;
            padding: 10px;
        }
        .legendForm{
            // display: inline-block;
        }

        input:focus,
        select:focus,
        textarea:focus,
        button:focus {
            outline: none;
        }
    }
</style>