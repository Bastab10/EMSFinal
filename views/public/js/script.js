// ===== Filter Buttons =====

const buttons =
  document.querySelectorAll(".filter-btn");

const cards =
  document.querySelectorAll(".event-card");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const filter =
      button.getAttribute("data-filter");

    // Active button style
    buttons.forEach(btn=>{
      btn.classList.remove("btn-danger");
      btn.classList.add("btn-outline-info");
    });

    button.classList.remove("btn-outline-info");
    button.classList.add("btn-danger");


    // Show / Hide cards
    cards.forEach(card => {

      if(filter === "all" ||
         card.dataset.category === filter){

        card.style.display = "block";

      }else{

        card.style.display = "none";

      }

    });

  });

});
