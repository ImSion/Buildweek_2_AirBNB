// document.addEventListener("DOMContentLoaded", function(){
//     // Seleziona tutti i bottoni che attivano il collapse
//     var collapseButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
  
//     collapseButtons.forEach(function(btn) {
//       btn.addEventListener('click', function() {
//         // Ottieni l'ID del target del collapse da aprire
//         var targetId = this.getAttribute('data-bs-target') || this.getAttribute('href');
//         var target = document.querySelector(targetId);
  
//         // Chiudi tutti i collapsible, tranne il target corrente
//         collapseButtons.forEach(function(otherBtn) {
//           var otherTargetId = otherBtn.getAttribute('data-bs-target') || otherBtn.getAttribute('href');
//           if (otherTargetId !== targetId) {
//             var otherTarget = document.querySelector(otherTargetId);
//             var bsCollapse = new bootstrap.Collapse(otherTarget, {toggle: false});
//             bsCollapse.hide();
//           }
//         });
  
//         // Controlla se il target corrente è già aperto e agisce di conseguenza
//         var bsCollapse = new bootstrap.Collapse(target, {toggle: false});
//         if (!target.classList.contains('show')) {
//           bsCollapse.show();
//         } else {
//           bsCollapse.hide();
//         }
//       });
//     });
//   });