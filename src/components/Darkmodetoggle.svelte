<script lang="ts">
    import { toggleMode } from "mode-watcher";
    import { resetMode } from "mode-watcher";
</script>

<button on:click={toggleMode} class="btn">Dark/Light Mode</button>
<button on:click={resetMode} class="btn">Reset Mode</button>