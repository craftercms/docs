/* If the page is loaded with a hash in the URL (e.g., anchor link),
	hide vertical scrolling and show a loading spinner overlay.
	`loader.js` is loaded at the very beginning of the body, for it to be injected before rendering the rest of the page*/
if (window.location.hash) {
	document.documentElement.style.overflowY = 'hidden';
	// Create and inject loader
	const loader = document.createElement('div');
	loader.id = 'loader';
	loader.style.display = 'flex';
	loader.innerHTML = '<div class="spinner"></div>';
	document.body.appendChild(loader);
}

/* On window load, if a hash is present in the URL, scrolls to the element with that ID,
	then hides the loader after a short delay and restores vertical scrolling. */
window.addEventListener('load', function() {
	if (window.location.hash) {
		const element = document.getElementById(window.location.hash.substring(1));
		if (element) {
			element.scrollIntoView({
				behavior: 'instant'
			});
		}
		setTimeout(() => {
			document.documentElement.style.overflowY = 'auto';
			const loader = document.getElementById('loader');
			if (loader) {
				loader.style.display = 'none';
			}
		}, 50)
	}
});
