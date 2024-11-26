<script lang="ts">
    import Sun from "./Sun.svelte";

	function toggle_theme(): void {
        let saved_theme = localStorage.getItem("theme");
        let prefersDarkMode  = window.matchMedia("(prefers-color-scheme: dark)").matches;

            if (saved_theme ==null) {
                console.log("No saved theme. Now set a theme opposite to system prefernce");
                let themeToSet = prefersDarkMode ? "light" : "dark" ;
                console.log("set theme to ", themeToSet);
                localStorage.setItem("theme", themeToSet);
                if (themeToSet=="dark") {
                    document.body.classList.add(themeToSet);
                    console.log("Added Class  ", themeToSet);
                }
                else {
                    document.body.classList.remove("dark");
                    console.log("Removed Class  ", "dark");
                }
            }

            else  {
                let themeToSet = saved_theme=="dark" ? "light" : "dark" ;
                console.log("saved theme -- ", saved_theme, "--Now set a theme opposite to saved theme preference--", themeToSet);
                localStorage.setItem("theme", themeToSet);

                if (themeToSet=="dark") {
                    document.body.classList.add(themeToSet);
                    console.log("Added Class  ", themeToSet);
                }
                else {
                    document.body.classList.remove("dark");
                    console.log("Removed Class  ", "Dark");
                }
            } 
 
        }


</script>

<footer 
    class="sticky top-[100vh]  p-2
    bg-slate-200 dark:bg-slate-700
     ">

    <div class="footer
    container mx-auto 
    flex w-full flex-wrap items-center justify-between"
    id = "footerrContainedContent">

            <aside>
            <h2>
                Computer Facility
                <br />
                AIIMS New Delhi, (c) 2024
            </h2>
            </aside>

            <nav>
            <h6 class="footer-title">Legal</h6>
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
            <a class="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 class="footer-title">Mode</h6>
                <button aria-label="toggle theme" on:click={toggle_theme}>
                    <Sun />
                </button>
            </nav>
    </div>
    
  </footer>