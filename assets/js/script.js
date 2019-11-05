// Appel de la librairie Jquery
$(function(){
  // Fonction pour afficher le texte lors du click sur le lien
  $('#show').click(function(){
    $('#text').show();
    // Fonction pour cacher le texte lors du click sur le lien
    $('#hide').click(function(){
      $('#text').hide();
    });
  });
});
