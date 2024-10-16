document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    alert(`Réservation confirmée pour ${name} le ${date} à ${time}`);
    
    // Ici, vous pourriez envoyer les données à un serveur si vous en aviez un
    this.reset();
});