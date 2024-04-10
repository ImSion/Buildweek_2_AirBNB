document.getElementById('searchButton').addEventListener('click', function() {
    var searchSection = document.getElementById('searchSection');
    if (searchSection.style.maxHeight === "0px" || searchSection.style.maxHeight === "") {
        searchSection.style.maxHeight = searchSection.scrollHeight + "px";
    } else {
        searchSection.style.maxHeight = "0px";
    }
});