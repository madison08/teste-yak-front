<template>
    <div>


        <div class="col-sm-12">
            <div class="card-box">

                <h3>Ajouter un nouvel utilisateur</h3>

                <form action="">

                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="">Nom</label>
                        <input type="text" class="form-control" id="" placeholder="Nom">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Prenom</label>
                        <input type="text" class="form-control" id="" placeholder="Nom">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="">Pseudo</label>
                        <input type="text" class="form-control" id="" placeholder="Pseudo">
                    </div>


                    <div class="form-group col-md-6">
                        <label for="">Mot de passe</label>
                        <input type="password" class="form-control" id="" placeholder="Mot de passe">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="exampleFormControlSelect1">Role</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Admin</option>
                            <option>Agent</option>
                            <option>Superviseur</option>
                        </select>
                    </div>

                    
                </div>

                    <button type="submit" class="btn btn-primary col-lg-12">S'ENREGISTRER</button>


                </form>

            </div>

        </div>

    </div>
</template>
<script>
    export default{
        name: 'AddUser',
    }
</script>