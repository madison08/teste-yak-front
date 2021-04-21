<template>
    <div>


        <div class="col-sm-12">
            <div class="card-box">
                <h3>Ajouter de nouvelle especes</h3>

                <form action="" class="mt-3">

                    <fieldset>
                        <legend>Reproducteurs</legend>

                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">NOM :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="text" class="form-control" id="" placeholder="Ex: Poulet">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label class="" for="">QUANTITÉ :</label>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="">Mâles</label>
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="">Femelles</label>
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                        </div>
                        

                    </fieldset>

                    <fieldset>
                        <legend>Evolution</legend>


                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Durée de vie :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Maturité vente (mois) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Durée d'incubation (jours) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        

                    </fieldset>


                    <fieldset>
                        <legend>Production</legend>


                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Production à maturité par unité :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Production mensuelle :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Production hebdomadaire :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        

                    </fieldset>

                    <fieldset>
                        <legend>ALIMENTATION</legend>


                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Alimentation poussins 1 mois (g/jr/u) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Prix Alimentation poussins 1 mois (par g) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Alimentation adulte (g/jr/u) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Alimentation adulte (g/jr/u) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        

                    </fieldset>


                    <fieldset>
                        <legend>Pertes</legend>


                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Pertes incubations (en %) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Pertes poussins 1 mois (en %) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Pertes adulte (en %) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        

                    </fieldset>

                    <fieldset>
                        <legend>Ventes</legend>


                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="">Prix de vente à maturité (FCFA/u) :</label>
                            </div>
                            <div class="form-group col-md-9">
                                <input type="number" class="form-control" id="" placeholder="">
                            </div>
                            
                        </div>
                        

                    </fieldset>


                    <button type="submit" class="col-lg-12 btn btn-primary mt-4">ENREGISTRER</button>



                    

                </form>

            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name: 'AddSpecy'
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