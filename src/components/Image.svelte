<script>
	/** @type {string} */
	export let alt;
	/** @type {string} */
	export let src;
	/** @type {"lazy" | "eager" | null | undefined }*/
	export let loading = 'lazy';
	/** @type {"async" | "auto" | "sync" | null | undefined} */
	export let decoding = 'async';
</script>

<img class="object-cover w-full h-full" {src} {alt} {loading} {decoding} />
