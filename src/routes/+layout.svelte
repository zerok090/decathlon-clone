<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import clsx from 'clsx';
	import { openMenu } from '../stores/navigationStore';

	$: stylesMain = clsx($openMenu && 'ml-[20rem] mt-[66px]', 'relative');
</script>

<Header />
<main class={stylesMain}>
	<slot />
</main>
<Footer />
