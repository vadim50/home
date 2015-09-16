
var link = document.querySelector(".header-menu-btn");
var popup = document.querySelector(".header-navigation");
var close = document.querySelector(".show-btn");

 link.addEventListener("click", function(event) {
event.preventDefault();
    popup.classList.add("surprize-show");

});
	  close.addEventListener("click",function(event) {
		  event.preventDefault();
		  popup.classList.remove("surprize-show");
	 });

