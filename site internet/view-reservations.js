document.addEventListener('DOMContentLoaded', function() {
    const reservationsList = document.getElementById('reservations-list');
    const reservations = getReservations();

    if (reservations.length === 0) {
        reservationsList.innerHTML = '<p>Aucune réservation pour le moment.</p>';
    } else {
        let html = '<ul>';
        reservations.forEach(reservation => {
            html += `<li>
                ${reservation.name} - ${reservation.date} à ${reservation.time}
                (Email: ${reservation.email}, Tél: ${reservation.phone})
            </li>`;
        });
        html += '</ul>';
        reservationsList.innerHTML = html;
    }
});