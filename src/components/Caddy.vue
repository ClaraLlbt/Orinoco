<script>
export default {
    name: "Caddy",
}
</script>

<template>
    <div class="row">
        <div class="col">
            <article class="pull-center">
                <legend>Mon panier</legend>
                <table id="tableau" class="table table-responsive-lg table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Articles</th>
                            <th>Qte</th>
                            <th>Prix</th>
                            <th>Prix total</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody id="caddy" ></tbody>
                    
                </table>
            </article>
            <article>
                <table class="table">
                    <thead>
                        <tr id="totalPrice">
                            <th>Total :</th>
                        </tr>
                    </thead>
                </table>
            </article>
        </div>
    </div>
</template>

<style lang="scss">

</style>