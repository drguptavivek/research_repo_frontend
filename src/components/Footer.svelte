
<script lang="ts">
 //   import Darkmodetoggle from "./Darkmodetoggle.svelte";
    import Sun from "./Sun.svelte";
	import { THEMES } from "$lib/config";

    function set_theme(theme: string) {
		if (!Object.values(THEMES).includes(theme)) return;
		localStorage.setItem("theme", theme);
		document.body.setAttribute("data-theme", theme);
        document.body.classList.toggle("dark");
	}

	function toggle_theme(): void {
		let current_theme = document.body.getAttribute("data-theme");
		const theme =
			current_theme === THEMES.LIGHT
				? THEMES.DARK
				: THEMES.LIGHT;
		set_theme(theme);
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