// Get the modal:ajouter revenu
var modal_revenu = document.getElementById("myModal2");

// Get the button that opens the modal
var btn_revenu = document.getElementById("add-income");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn_revenu.onclick = function() {
  modal_revenu.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal_revenu.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_revenu) {
    modal.style.display = "none";
  }
}


//ajouter depenses
var modal_depense = document.getElementById("myModal1");

// Get the button that opens the modal
var btn_depense= document.getElementById("add-expense");


// When the user clicks on the button, open the modal
btn_depense.onclick = function() {
  modal_depense.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal_depense.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_depense) {
    modal_depense.style.display = "none";
  }
}


//ajouter budget
var modal_budget = document.getElementById("myModal3");

// Get the button that opens the modal
var btn_budget = document.getElementById("budget");

// When the user clicks on the button, open the modal
btn_budget.onclick = function() {
  modal_budget.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal_budget.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_budget) {
    modal_budget.style.display = "none";
  }
}