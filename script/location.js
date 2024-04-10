document.addEventListener("DOMContentLoaded", function () {
    // Aggiungi un ascoltatore per l'evento di invio del form
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita il comportamento predefinito del form (ovvero l'invio della richiesta HTTP)

        // Ottieni i valori dai campi del form
        var name = document.getElementById("Name").value;
        var rating = document.getElementById("ratings").value;
        var reviewText = document.getElementById("review").value;

        // Crea gli elementi HTML del nuovo review
        var newReviewDiv = document.createElement("div");
        newReviewDiv.classList.add("col-12", "col-xl-6", "mt-3");

        var userInfoDiv = document.createElement("div");
        userInfoDiv.classList.add("d-flex", "mb-2", "gap-1");

        var userImg = document.createElement("img");
        userImg.classList.add("img-user");
        userImg.setAttribute("src", "/assets/propic.png");
        userImg.setAttribute("alt", "");

        var userInfoTextDiv = document.createElement("div");
        userInfoTextDiv.classList.add("d-flex", "flex-column");

        var userNameSpan = document.createElement("span");
        userNameSpan.classList.add("fw-bold");
        userNameSpan.textContent = name;

        var reviewDateSpan = document.createElement("span");
        reviewDateSpan.textContent = new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }); // Ottieni la data attuale nel formato "Mese Anno"

        var reviewTextSpan = document.createElement("span");
        reviewTextSpan.textContent = reviewText;

        // Costruisci la struttura del nuovo review
        userInfoTextDiv.appendChild(userNameSpan);
        userInfoTextDiv.appendChild(reviewDateSpan);
        userInfoDiv.appendChild(userImg);
        userInfoDiv.appendChild(userInfoTextDiv);
        newReviewDiv.appendChild(userInfoDiv);
        newReviewDiv.appendChild(reviewTextSpan);

        // Aggiungi il nuovo review al contenitore degli user reviews
        document.getElementById("userReviewsContainer").appendChild(newReviewDiv);

        // Resetta il form
        document.querySelector("form").reset();
    });
});
