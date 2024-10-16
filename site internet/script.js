document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const reservation = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    };
    
    addReservation(reservation);
    
    alert(`Réservation confirmée pour ${reservation.name} le ${reservation.date} à ${reservation.time}`);
    
    this.reset();
});