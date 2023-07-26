<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import SideNav from '../components/SideNav.svelte';
</script>

<SideNav />
<Header />
<main>
	<slot />
</main>
<Footer />
