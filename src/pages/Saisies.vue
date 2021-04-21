<template>
    <div id="saisies">

        <!-- <h1>Saisie</h1> -->

        <div class="col-sm-12">
            <div class="card-box">

                <form action="" method="post" class="form">
                    

                    <div class="formTitle">
                        Renseigner les champs etape par etape
                    </div>

                    <p>Periode ou date :</p>

                    <div class="date-block">
                        Du <input v-model="formData.startDate" type="date" name="" id="start-date">
                        Au <input v-model="formData.endDate" type="date" name="" id="end-date">
                    </div>

                    <!-- <input v-if="startDate != ''" type="text" placeholder="operation"> -->
                    <transition name="fade">

                    <div v-if="formData.startDate != '' && formData.endDate != '' " class="formItem">

                        <!-- <hr style="color: #000;height: 15px;"> -->



                        <select v-model="formData.selectOp" name="" id="" class="operation">
                            <option v-for="(Operation, index) in formData.listOp" :key="index" :value="Operation">
                                {{ Operation }}
                            </option>
                        </select>

                        <!-- {{ formData.selectOp  }} -->
                    </div>

                    </transition>



                    <transition name="fade">

                    <div v-if="formData.selectOp != 'Selectionner une operation' && formData.selectOp != '' && formData.startDate != '' && formData.endDate != ''" class="formItem">

                        <select v-model="formData.selectSpecy" name="" id="" class="espece">
                            <option v-for="(Specy, indexSpecy) in formData.listSpecy" :key="indexSpecy" :value="Specy">
                                {{ Specy }}
                            </option>
                        </select>

                        <!-- {{ formData.selectSpecy  }} -->
                    </div>

                    </transition>
                        
                        

                    <transition name="fade">

                            <fieldset v-if="formData.selectSpecy != 'Selectionner une espece'" class="fieldsetForm mt-2">
                                <div v-if="formData.selectSpecy != 'Selectionner une espece' && formData.selectOp == 'Eclosions'" class="formItem">

                                        <!-- <legend class="legendForm">Eclosion</legend> -->
                                        <input type="number" placeholder="Quantiter" class="formQuantite">
                                        <input type="number" placeholder="Quantiter" class="ml-3 formQuantite">

                                </div>

                                <div v-if="formData.selectSpecy != 'Selectionner une espece' && formData.selectOp == 'Oeufs en incubation'" class="formItem">

                                        <!-- <legend class="legendForm">Eclosion</legend> -->
                                        <input type="number" placeholder="Quantiter" class="formQuantite">

                                </div>

                                <div v-if="formData.selectSpecy != 'Selectionner une espece' && formData.selectOp == 'Oeufs ramasser'" class="formItem">

                                        <input type="number" placeholder="Quantiter" class="formQuantite">

                                </div>

                                <button type="submit" class="btn btn-primary col-lg-12 mt-3">ENREGISTRER</button>
                            </fieldset>


                    </transition>


                </form>

            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name: 'saisies',

        data(){
            return{
                formData: {
                    startDate: '',
                    endDate: '',
                    selectOp: 'Selectionner une operation',
                    listOp: [
                        'Selectionner une operation',
                        'Oeufs ramasser',
                        'Oeufs en incubation',
                        'Eclosions',
                    ],
                    selectSpecy: 'Selectionner une espece',
                    listSpecy: [
                        'Selectionner une espece',
                        'Hybride',
                        'Pintade'
                    ]
                }
            }
        }
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