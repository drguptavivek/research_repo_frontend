<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Darkmodetoggle from '../components/Darkmodetoggle.svelte';
	import '../app.css';
	let { children } = $props();
</script>


<Navbar />

{@render children()}


<Footer />