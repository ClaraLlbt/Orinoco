<script>
export default {

}
</script>

<template>
  <div class="container commitment-ctr">
    <div class="row order-informations">
      <h4>Nos engagements</h4>
      <div class="infos col-12">
        <div class="icon col-2"><i class="bi bi-box-seam"></i></div>
        <span class="txt col-10">
          <h5>Service de livraison Rapide</h5>
          Nous garantissons une livraison rapide et efficace de vos produits, 
          vous assurant ainsi une satisfaction immédiate. Avec notre service, 
          vos commandes seront entre vos mains en un temps record, 
          répondant ainsi à vos besoins avec précision et rapidité.</span>
      </div>
      <div class="infos col-12">
        <div class="col-2 icon"><i class="bi bi-telephone-outbound"></i></div> 
        <span>
          <h5>Service Client</h5>
          Notre équipe dévouée de service client est disponible pour répondre à toutes vos questions 
          et résoudre vos problèmes rapidement et efficacement. 
          Nos horaires d'assistance sont de 9h à 18h du lundi au vendredi, 
          pour vous offrir un soutien optimal tout au long de la semaine.</span>
      </div>
      <div class="infos col-12">
        <div class="icon col-2"><i class="bi bi-credit-card"></i></div>
        <span class="txt col-10">
          <h5>Paiements sécurisés</h5>
          Nous vous offrons des paiements sécurisés et fiables 
          pour garantir la protection de vos informations personnelles et financières. 
          Avec notre système de paiement sécurisé, vous pouvez effectuer vos transactions en toute tranquillité d'esprit, 
          24 heures sur 24, 7 jours sur 7.</span>
      </div>
    </div>
  </div>

  <footer class="container-fluid footer-ctr">
    <div class="row networks">
      <h4 class="col-2">Nous suivre</h4>
      <div class="col icons">
        <button class="btn"><i class="bi bi-facebook"></i></button>
        <button class="btn"><i class="bi bi-youtube"></i></button>
        <button class="btn"><i class="bi bi-linkedin"></i></button>
      </div>
    </div>
    <div class="row footer-infos">
      <div class="col-8 links">
        <div class="col-4">
          <h5>Informations</h5>
          <ul>
            <li class="link">Délais et coût de livraison</li>
            <li class="link">Conditions générales de vente</li>
            <li class="link">Politique de Confidentialité</li>
            <li class="link">Mentions légales</li>
          </ul>
        </div>
        <div class="col-4">
          <h5>Mon compte</h5>
          <ul>
            <li class="link">Mes commandes</li>
            <li class="link">Mes retours</li>
            <li class="link">Mes informations personnelles</li>
          </ul>
        </div>

      </div>
      <div class="col-4">
        <h5>Contact</h5>
        <ul>
          <li class="link"><i class="bi bi-envelope-at"></i> contact@gmail.com</li>
          <li class="link"><i class="bi bi-telephone"></i> 555-1234-5678</li>
          <hr>
          <li class="link">De 9h à 18h du Lundi au Vendredi </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang=scss>
.commitment-ctr {
  .order-informations{
    padding: 50px;
    background: aliceblue;
    margin: 100px 0;
    h4{
      padding-left: 50px;
    }
    .infos{
      display: flex;
      align-items: center;
      padding: 0;
      margin: 10px 0;
      .icon{
        font-size: xxx-large;
        text-align: center;
        color:white;
        i::before{
          background: #E20000;
          padding: 15px;
          border: 1px solid #E20000;
          border-radius: 100%;
        }

      }
    }
  }
}

footer {
  background-color: #00003A;
  color: white;
  padding: 20px;
  .row{
    width: 70%;
    margin: auto;
  }
  .networks{
    align-items: center;
    .icons i{
      color:white;
      font-size: xx-large;
    }
  }
  .footer-infos{
    .links{
      display: flex;
    }
  }
  ul{
    list-style: none;
    padding: 0;
  }
}
</style>