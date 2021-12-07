const applicationState = {
  reservations: [],
  clowns: [],
  completedReservations: []
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchReservations = () => {
  return fetch(`${API}/reservations`)
    .then(response => response.json())
    .then(reservations => {
      applicationState.reservations = reservations;
    })
}

export const fetchClowns = () => {
  return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(clowns => {
      applicationState.clowns = clowns;
    })
}

export const fetchCompletedReservations = () => {
  return fetch(`${API}/completedReservations`)
    .then(response => response.json())
    .then(completedReservations => {
      applicationState.completedReservations = completedReservations;
    })
}

export const sendReservation = (userReservation) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userReservation)
  }

  return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })

}

export const deleteReservation = (id) => {
  return fetch(`${API}/reservations/${id}`, { method: "DELETE"})
    .then(
      () => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
      }
    )
}

export const getReservations = () => {
  return applicationState.reservations.map(reservation => ({ ...reservation }));
}

