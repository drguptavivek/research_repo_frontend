<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Darkmodetoggle from '../components/Darkmodetoggle.svelte';
	import '../app.css';
	let { children } = $props();
</script>


<Navbar />

<div class="container  mx-auto h-100">
{@render children()}
</div>

<Footer />