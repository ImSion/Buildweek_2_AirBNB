document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleSearch').addEventListener('click', function() {
        var searchSection = document.getElementById('searchFields');
        
        if (searchSection.classList.contains('hidden')) {
            searchSection.classList.remove('hidden');
            setTimeout(function() { // Aspetta un ciclo di rendering per l'animazione
                searchSection.style.maxHeight = searchSection.scrollHeight + "px";
            }, 10);
        } else {
            searchSection.style.maxHeight = '0';
            searchSection.addEventListener('transitionend', function() {
                searchSection.classList.add('hidden');
            }, {
                once: true
            });
        }
    });
});