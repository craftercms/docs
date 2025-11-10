// Toggles open the version dropdown
document.addEventListener('click', function (event) {
	if (event.target.matches("[data-toggle='rst-current-version']")) {
		document.querySelector("[data-toggle='rst-versions']").classList.toggle("shift-up");
	}
});

