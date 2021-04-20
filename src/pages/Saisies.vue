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

                        {{ formData.selectOp  }}
                    </div>

                    </transition>



                    <transition name="fade">

                    <div v-if="formData.selectOp != ''" class="formItem">

                        <select v-model="formData.selectSpecy" name="" id="" class="espece">
                            <option v-for="(Specy, indexSpecy) in formData.listSpecy" :key="indexSpecy" :value="Specy">
                                {{ Specy }}
                            </option>
                        </select>

                        {{ formData.selectSpecy  }}
                    </div>

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
                    selectOp: '',
                    listOp: [
                        'Oeufs ramasser',
                        'Oeufs en incubation',
                        'Eclosions',
                    ],
                    selectSpecy: '',
                    listSpecy: [
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
            padding: 15px;
            // background-color: red;
            border: 1px solid #000;
            border-radius: 10px;

        }

        .operation,.espece{
            padding: 10px;
            border: 1px solid #000;
            border-radius: 10px;
        }

        .fade-enter-active, .fade-leave-active {
        transition: opacity 0.7s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        }

        input:focus,
        select:focus,
        textarea:focus,
        button:focus {
            outline: none;
        }
    }
</style>