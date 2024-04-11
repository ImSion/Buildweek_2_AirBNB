document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleSearch').addEventListener('click', function() {
        var searchSection = document.getElementById('searchFields');
        
        // Controllo iniziale per rimuovere la classe 'hidden', se presente
        if (searchSection.classList.contains('hidden')) {
            searchSection.classList.remove('hidden');
        }
        
        // Controlliamo se la sezione è già visibile o meno controllando maxHeight
        if (searchSection.style.maxHeight === "0px" || searchSection.style.maxHeight === "") {
            // Sezione non è visibile, quindi la mostriamo
            searchSection.style.maxHeight = searchSection.scrollHeight + "px";
        } else {
            // Sezione è visibile, quindi la nascondiamo
            searchSection.style.maxHeight = "0px";
        }
    });
});