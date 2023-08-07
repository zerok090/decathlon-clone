<script>
</script>

<div class="w-full flex justify-center items-center">
	<div class="loader" />
</div>

<style>
	.loader {
        border: 5px solid white;
		color: black;
		border-top: 5px solid #555;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
