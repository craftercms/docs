// Toggles open the version dropdown
document.addEventListener('click', function (event) {
	if (event.target.matches("[data-toggle='rst-current-version']")) {
		document.querySelector("[data-toggle='rst-versions']").classList.toggle("shift-up");
	}
});

// const target = window.location.hash.substring(1);
// // Remove hash to prevent automatic scrolling
// window.location.hash = "";
// window.addEventListener('load', function() {
// 	if (target) {
// 		const element = document.getElementById(target);
// 		if (element) {
// 			// scroll to the element with id from the URL hash
// 			element.scrollIntoView();
// 			// Restore the hash in the URL
// 			window.location.hash = `#${target}`;
// 		}
// 	}
// });

window.addEventListener('DOMContentLoaded', function() {
	const images = Array.from(document.querySelectorAll('.article-container img'));
	function scrollToAnchor() {
		const element = document.getElementById(window.location.hash.substring(1));
		if (element) {
			element.scrollIntoView();
		}
	}

	if (images.length === 0) {
		scrollToAnchor();
	} else {
		images.forEach(img => {
			if (img.complete) {
				scrollToAnchor();
			} else {
				img.addEventListener('load', scrollToAnchor);
				img.addEventListener('error', scrollToAnchor);
			}
		});
	}
});

