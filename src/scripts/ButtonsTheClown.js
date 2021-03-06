import { CompletedReservations } from "./CompletedReservations.js"
import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"

export const ButtonsTheClown = () => {
  return `
    <h1>Buttons the Clown Rental</h1>
    <article class= reservationForm>
      ${ReservationForm()}
    </article>

    <article>
      <h2>Reservations</h2>
      ${Reservations()}
    </article>

    <article>
      <h2>Completed Reservations</h2>
      ${CompletedReservations()}
    </article>
  `
}