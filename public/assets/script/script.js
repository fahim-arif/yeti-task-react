// Dropdown
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.filter-bnt')) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
		}
	}
	}
}

// Navbar
function w3_open() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("main-header").style.display = "none";
	document.getElementById("home-screen").style.display = "none";
}

function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("main-header").style.display = "block";
	document.getElementById("home-screen").style.display = "block";
}
