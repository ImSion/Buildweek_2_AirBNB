// quando carica la pagina fa cose...
document.addEventListener('DOMContentLoaded', function () {
    // vado a puntere il form
    let form = document.getElementById('Form');
    // vado a puntare l'id che ho messo all'input submit
    let submitButton = document.getElementById('submitButton');
    // quando scrivo nel form comparirà il bottone submit
    form.addEventListener('input', function () {
        if (form.checkValidity()) {
            submitButton.classList.remove('hidden');
        } else {
            submitButton.classList.add('hidden');
        }
    });

    // vado a puntare il container delle recensioni
    const reviewsContainer = document.getElementById('reviewsContainer');

    form.addEventListener('submit', function (event) {
        // faccio in modo che se clicco submit non scompare niente e non torna su alla pagina
        event.preventDefault(); 
        // vado a puntare il valore dell'input name
        let name = document.getElementById('Name').value;
         // vado a puntare il valore dell'input review
        let review = document.getElementById('review').value;
        // questo è quello che comparirà al click del submit dopo che ho compilato il form
        let newReview = `
            <div class="col-12 col-xl-6 mt-3">
                <div class="d-flex mb-2 gap-1">
                    <img class="img-user" src="/assets/propic.png" alt="user-img">
                    <div class="d-flex flex-column">
                        <span class="fw-bold">${name}</span>
                        <span>${new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                </div>
                <span>${review}</span>
            </div>
        `;

        // inserisco il contenuto di newReview prima della fine del review container
        reviewsContainer.insertAdjacentHTML('beforeend', newReview);
        // al click del submit le cose che ho scritto scompariranno
        form.reset(); 
        // nascondo di nuovo il bottone submit
        submitButton.classList.add('hidden');
    });
});
