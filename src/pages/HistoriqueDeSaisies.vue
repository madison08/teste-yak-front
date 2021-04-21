<template>
    <div>

        <h1>Historique de saisie</h1>

        

        <div class="col-sm-12">
            <div class="card-box">

                <!-- <select name="" id="">
                    <option value="Trie">Trier par</option>
                </select> -->

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Espece</th>
                        <th scope="col">Operation</th>
                        <th scope="col">Periode</th>
                        <th scope="col">Qte</th>
                        <th scope="col">Ajouter par</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Hybride</th>
                        <td>Eclosion</td>
                        <td>02-05-2020 -- 07-07-2020 </td>
                        <td>255</td>
                        <td>admin</td>
                        <td><div class="myBtn bg-success">voir</div></td>
                        </tr>
                        <tr>
                        <th scope="row">Pintade</th>
                        <td>Eclosion</td>
                        <td>02-05-2020 -- 07-07-2020</td>
                        <td>387</td>
                        <td>admin</td>
                        <td><div class="myBtn bg-success">voir</div></td>
                        </tr>
                        <tr>
                        <th scope="row">Africain</th>
                        <td>Eclosion</td>
                        <td>02-05-2020 -- 07-07-2020</td>
                        <td>635</td>
                        <td>admin</td>
                        <td><div class="myBtn bg-success">voir</div></td>
                        </tr>
                    </tbody>
                    </table>


            </div>

        </div>

    </div>
</template>
<script>
    export default{
        name: 'HistoriqueDeSaisies'
    }
</script>
<style lang="scss">
    .myBtn{
        background-color: grey;
        color: #fff;
        display: inline-block;
        padding: 3px;
        font-size: 14px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>