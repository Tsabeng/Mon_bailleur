// Récupérer le formulaire et le bouton de soumission
const form = document.getElementById('registrationForm');
const errorMsg = document.getElementById('errorMsg');

// Ajouter un écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', function(event) {
    // Empêcher l'envoi du formulaire
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Vérifier si les champs sont vides
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMsg.textContent = 'Tous les champs sont obligatoires.';
        errorMsg.style.display = 'block';
        return;
    }

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
        errorMsg.textContent = 'Les mots de passe ne correspondent pas.';
        errorMsg.style.display = 'block';
        return;
    }

    // Si toutes les conditions sont remplies, on peut envoyer le formulaire
    errorMsg.style.display = 'none';
    alert('Inscription réussie !');
    form.submit(); // Tu peux l'activer plus tard si tu as un backend
});
