
<script lang="ts">
    import Darkmodetoggle from "./Darkmodetoggle.svelte";
</script>




<footer 
    class="sticky top-[100vh]  p-2
    bg-slate-100 dark:bg-slate-700
    text-gray-700  ">

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
                <h6 class="footer-title">Switch Dark/Light Modes</h6>
                <Darkmodetoggle />
            </nav>
    </div>
    
  </footer>