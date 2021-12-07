import { getReservations, deleteReservation } from "./dataAccess.js";

export const Reservations = () => {
  const reservationsArr = getReservations();

  return `
    <ul>
      ${reservationsArr
        .map((reservation) => {
          return `<li>
          ${reservation.parentName} reserved a party for 
          ${reservation.childName} at ${reservation.partyAddress} on 
          ${reservation.partyDate}
          <button class="reservation__deny" id="reservation--${reservation.id}">Deny</button>
          </li>`;
        })
        .join("")}
    </ul>
  `;
};

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", event => {
  if (event.target.id.startsWith("reservation--")) {
    const [, reservationId] = event.target.id.split("--");
    deleteReservation(parseInt(reservationId))
  }
})