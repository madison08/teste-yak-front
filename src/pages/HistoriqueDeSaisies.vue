<template>
    <div>


        

        <div class="col-sm-12">
            <div class="card-box">

        <h3>Historique de saisie</h3>


                <!-- <select name="" id="">
                    <option value="Trie">Trier par</option>
                </select> -->

                <form action="" class="mb-3">

                        <!-- <div class="sortByBox"> -->
                            <select name="" class="sortBy">
                                <option value="Tri">Trier par</option>
                                <option value="Tri">First</option>
                                <option value="Tri">Two</option>
                                <option value="Tri">Second</option>
                            </select>
                        <!-- </div> -->

                    </form>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Operation</th>
                        <th scope="col">Description</th>
                        <th scope="col">Utilisateur</th>
                        <!-- <th scope="col">Action</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Eclosion</th>
                        <td class="historique-info-add">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nemo sapiente! Quo provident itaque corporis iste lorem ipsum </td>
                        <td>admin</td>
                        <!-- <td><div class="myBtn bg-success">voir</div></td> -->
                        </tr>
                        <tr>
                        <th scope="row">Eclosion</th>
                        <td class="historique-info-delete">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nemo sapiente! Quo provident itaque corporis iste iste lorem ipsum </td>
                        <td>admin</td>
                        <!-- <td><div class="myBtn bg-success">voir</div></td> -->
                        </tr>
                        <tr>
                        <th scope="row">Eclosion</th>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nemo sapiente! Quo provident itaque corporis iste iste lorem ipsum </td>
                        <td>admin</td>
                        <!-- <td><div class="myBtn bg-success">voir</div></td> -->
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

    .historique-info-add{
        color: green;
    }

    .historique-info-delete{
        color: red;
    }
    .historique-info-update{
        color: orange;
    }
</style>