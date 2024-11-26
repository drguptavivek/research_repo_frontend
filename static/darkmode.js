const saved_theme = localStorage.getItem("theme");
if (saved_theme) {
	console.log(saved_theme);
	document.body.setAttribute("data-theme", saved_theme);
	document.body.classList.add(saved_theme);
} else {
	const prefers_dark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const theme = prefers_dark ? "dark" : "light";
	console.log(theme);
	document.body.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
}