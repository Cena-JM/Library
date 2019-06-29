let close_modal = document.getElementsByClassName('close')[0];
let modal = document.getElementById('modal')
let open_modal = document.getElementById('new-book-btn'); 


open_modal.addEventListener('click', () => {
  if (modal.classList.value === "hidden") {
    modal.classList.remove("hidden");
    modal.classList.add("show");
  }
})

close_modal.addEventListener('click', () =>  {
  if (modal.classList.value === "show") {
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    modal.classList.add('hidden');
  }
}