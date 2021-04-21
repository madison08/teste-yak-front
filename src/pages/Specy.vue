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
                    <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Males</th>
                        <th scope="col">Femelles</th>
                        <th scope="col">Prix de vente</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Hybride</th>
                        <td>Eclosion</td>
                        <td>02-05-2020 -- 07-07-2020 </td>
                        <td>255</td>
                        <td><div class="myBtn">editer</div> <div class="myBtn bg-danger">supprimer</div></td>
                        </tr>
                        <tr>
                        <th scope="row">Pintade</th>
                        <td>Eclosion</td>
                        <td>02-05-2020 -- 07-07-2020</td>
                        <td>387</td>
                        <td><div class="myBtn">editer</div> <div class="myBtn bg-danger">supprimer</div></td>
                        </tr>
                        <tr>
                        <th scope="row">Africain</th>
                        <td>Eclosion</td>
                        <td>02-05-2020 -- 07-07-2020</td>
                        <td>635</td>
                        <td><div class="myBtn">editer</div> <div class="myBtn bg-danger">supprimer</div></td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'Specy'
    }
</script>
<style>

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

    

</style>