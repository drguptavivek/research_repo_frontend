let saved_theme = localStorage.getItem("theme");

let darkModePrefListenr = window.matchMedia("(prefers-color-scheme: dark)");

let prefersDarkMode  = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log("prefersDarkMode = ", prefersDarkMode, "Saved theme = ", saved_theme);
if (saved_theme=="dark" | (prefersDarkMode)) {
	document.body.classList.add("dark");
}


darkModePrefListenr.onchange = (e) => {
	if (e.matches | saved_theme=="dark" ) {
	  console.log("Dark Mode preferred.");
	  document.body.classList.add("dark");
	} else {
	  console.log("Light mode preferred.");
	  document.body.classList.remove("dark");
	}
  };