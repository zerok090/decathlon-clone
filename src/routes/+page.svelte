<script>
	import { onMount } from 'svelte';
	import { apiData } from '../stores/productStore';

	import ProductCard from '$components/ProductCard.svelte';

	const url = 'https://fakestoreapi.com/products';

	onMount(async () => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				apiData.set(data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
</script>

<div>
	<h1 class="text-3xl font-bold underline">Hello world!</h1>
	<br />
	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
		{#each $apiData as product}
			<ProductCard {...product} />
		{/each}
	</div>
	<br />
	<p class="h-screen">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum sit amet quam eu
		efficitur. Sed at arcu metus. Etiam orci ante, vehicula ac ex id, pretium molestie massa. Etiam
		sit amet pharetra sapien. Nullam in iaculis libero, in iaculis massa. Integer sit amet vulputate
		libero. Vestibulum fermentum suscipit ullamcorper. Sed id arcu egestas, cursus enim tincidunt,
		porttitor justo. Quisque vitae felis non sapien feugiat lacinia sit amet a felis. Maecenas
		tempus blandit sapien, laoreet fermentum odio ultrices in. Curabitur mattis neque at dignissim
		rhoncus. Nam id maximus elit. Nam scelerisque id dui sit amet ullamcorper. Quisque venenatis
		egestas lectus, ac viverra nisl congue nec. Nam ligula leo, lobortis eu elit at, gravida
		porttitor eros. Sed lacus magna, pellentesque ut erat ultrices, sodales pulvinar nunc. Maecenas
		et quam mauris. Etiam at mattis lectus. Aliquam sed nunc dapibus diam dignissim tincidunt.
		Pellentesque ut dictum neque. Sed bibendum cursus rhoncus. Ut ut ex facilisis, commodo felis et,
		ullamcorper nibh. Praesent finibus sed erat luctus efficitur. Praesent in fermentum lorem, ac
		convallis libero. Curabitur maximus mattis nulla, ac gravida diam suscipit id. Etiam pretium
		egestas fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat
		posuere est, vel consectetur risus accumsan vel. Mauris posuere metus ac euismod varius.
		Curabitur id urna non ante facilisis eleifend. Vivamus eu ante metus. Phasellus eros felis,
		venenatis in ligula et, venenatis malesuada lorem. Proin vel elit malesuada, sagittis tellus
		vitae, porta nibh. Donec dapibus egestas mauris, vestibulum sollicitudin mauris efficitur in.
		Nullam posuere tincidunt nisi. Etiam at nisl at massa sagittis pellentesque. Nullam at convallis
		massa. Nunc augue leo, pretium et ornare a, vulputate eu lectus. Nullam hendrerit metus quis
		erat consectetur maximus. Mauris et porta ligula. Proin lacinia auctor turpis, non consectetur
		dui iaculis id. Fusce sit amet lorem vehicula, dignissim turpis auctor, interdum augue. Etiam
		imperdiet, arcu ac varius iaculis, nunc risus faucibus erat, et convallis justo velit non odio.
		Mauris eget elit a tortor placerat lacinia feugiat ut erat. Nam aliquam metus quis ligula
		luctus, ac pulvinar libero mollis.
	</p>
</div>
