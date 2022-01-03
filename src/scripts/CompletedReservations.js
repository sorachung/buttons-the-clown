import { getReservations, getClowns, getCompletedReservations } from "./dataAccess.js";
export const CompletedReservations = () => {
    const reservationsArr = getReservations();
    const clowns = getClowns();
    const completedReservations = getCompletedReservations();
    const foundCompletedRes = reservationsArr.filter(res => {
        return completedReservations.find(completedRes => res.id === completedRes.reservationId)
    })

    return `
    <ul>
      ${foundCompletedRes
          .map((reservation) => {
            const matchingCompletedRes = completedReservations.find(res => res.reservationId === reservation.id)
            const matchingClown = clowns.find(clown => clown.id === matchingCompletedRes.clownId)
              return `<li>
          ${reservation.parentName} reserved a party for 
          ${reservation.childName} at ${reservation.partyAddress} on 
          ${reservation.partyDate}. This was completed by ${matchingClown.name} on ${new Date(matchingCompletedRes.dateCompleted).toLocaleString()}
          
          

          </li>`;
          })
          .join("")}
    </ul>
  `;
};
