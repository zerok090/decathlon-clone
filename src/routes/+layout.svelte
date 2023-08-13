<script>
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import SideNav from '$components/SideNav.svelte';
</script>

<SideNav />
<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex items-stretch flex-1 relative z-10">
		<slot />
	</main>
	<Footer />
</div>
