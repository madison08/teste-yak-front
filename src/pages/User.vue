<template>
    <div>


        <div class="col-sm-12">
            <div class="card-box">
                <h3>Nos utilisateur</h3>

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
                        <router-link :to="{ name: 'addUser'}" class="btn btn-success">
                            Ajouter
                        </router-link>
                    </div>
                </div>

                <div class="separator"></div>


                <div>
                    <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Pseudo</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Admin</th>
                        <td>Admin</td>
                        <td>Admin</td>
                        <td>Admin@gmail.com</td>
                        <td>Admin</td>
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
        name: 'User'
    }
</script>