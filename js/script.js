  var popup = document.querySelector(".modal");

  var link = document.querySelector(".modal-button");


  link.addEventListener("click", function (evt) {

  	evt.preventDefault();

  	popup.classList.toggle("modal-show");
  });
