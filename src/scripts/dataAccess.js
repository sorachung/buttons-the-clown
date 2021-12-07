const applicationState = {
  reservations: [],
  clowns: [],
  completedReservations: []
}

const API = "http://localhost:8088"

export const fetchReservations = () => {
  return fetch(`${API}/reservations`)
    .then(response => response.json)
    .then(reservations => {
      applicationState.reservations = reservations;
    })
}

export const fetchClowns = () => {
  return fetch(`${API}/clowns`)
    .then(response => response.json)
    .then(clowns => {
      applicationState.clowns = clowns;
    })
}

export const fetchCompletedReservations = () => {
  return fetch(`${API}/completedReservations`)
    .then(response => response.json)
    .then(completedReservations => {
      applicationState.completedReservations = completedReservations;
    })
}