const buyTicketsBtns = document.querySelectorAll(".js-buy-ticket");
const buyTicketsModal = document.querySelector("#buy-ticket-modal");
const buyTicketsModalContainer = document.querySelector(
  "#buy-ticket-modal-container"
);
const buyTicketsModalCloseBtn = document.querySelector(
  "#buy-ticket-modal-close-btn"
);

const showBuyTicketsModal = () => {
  buyTicketsModal.classList.add("open");
};

const hideBuyTicketsModal = () => {
  buyTicketsModal.classList.remove("open");
};

if (buyTicketsBtns?.length > 0 && buyTicketsModal && buyTicketsModalCloseBtn) {
  for (const buyTicketBtn of buyTicketsBtns) {
    buyTicketBtn.addEventListener("click", showBuyTicketsModal);
  }

  buyTicketsModalCloseBtn.addEventListener("click", hideBuyTicketsModal);

  buyTicketsModal.addEventListener("click", hideBuyTicketsModal);

  buyTicketsModalContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
