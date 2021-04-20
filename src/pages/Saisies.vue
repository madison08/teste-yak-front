<template>
    <div id="saisies">

        <h1>Saisie</h1>

        <div class="col-sm-12">
            <div class="card-box">

                <form action="" method="post" class="form">
                    
                    {{ startDate }}

                    <div class="form__title">
                        Se connecter
                    </div>

                    <p>Periode ou date :</p>
                    Du <input v-model="startDate" type="date" name="" id="">
                    Au <input type="date" name="" id="">

                    <br><br>
                    <input v-if="startDate != ''" type="text" placeholder="operation">

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
                startDate: ''
            }
        }
    }
</script>
<style lang="scss">
    #saisies{
        .form{
            background-color: red;
        }
    }
</style>