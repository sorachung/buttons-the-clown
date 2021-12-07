import { fetchReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

const render = () => {
  fetchReservations().then(() => {
    mainContainer.innerHTML = "test";
  })
};

render();