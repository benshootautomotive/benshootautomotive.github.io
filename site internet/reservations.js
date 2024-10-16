let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

function addReservation(reservation) {
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

function getReservations() {
    return reservations;
}