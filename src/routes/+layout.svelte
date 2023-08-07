<script>
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import SideNav from '$components/SideNav.svelte';

</script>

<SideNav />
<div class="flex gap-2 flex-col min-h-screen">
	<Header />
	<main class="flex items-stretch flex-1 relative">
		<slot />
	</main>
	<Footer />
</div>
