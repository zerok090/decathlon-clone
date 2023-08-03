<script>
    /** @type {string} */
    export let url;
    /** @type {string} */
    export let text;
    export let styles = "hidden text-xs sm:flex items-center justify-center flex-col h-full py-2 pl-3 pr-4"
</script>

<li>
	<a
		href={url}
		class={styles}
	>
        <slot />
        <span class="hidden uppercase text-xs lg:block">{text}</span>
	</a>
</li>
