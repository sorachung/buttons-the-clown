export const ReservationForm = () => {
    return `
    <div class="field">
      <label class="label" for="parentName">Name of Parent</label>
      <input type="text" name="parentName" class=input />
    </div>
    <div class="field">
      <label class="label" for="childName">Name of Child</label>
      <input type="text", name="childName" />
    </div>
    <div class="field">
      <label class="label" for="numberOfChildren">Number of Children Attending</label>
      <input type="number" name="numberOfChildren" class="input" />
    </div>
    <div class="field">
      <label class= "label" for="partyAddress">Address Where the Party Takes Place</label>
      <input type="text" name="partyAddress" />
    </div>
    <div class="field">
      <label class="label" for="partyDate">Date of Party</label>
      <input type="date" name="partyDate" />
    </div>
    <div class="field">
      <label class="label" for="reservationLength">Party Duration</label>
      <input type="number" name="reservationLength" />
    </div>

    <button class="button" id="submitReservation">Submit Reservation</button>
    `
}