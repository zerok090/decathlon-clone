<script>
	import Cart from '~icons/fa/shopping-cart';
	import Question from '~icons/fa/question';
	import Store from '~icons/fa/building';
	import User from '~icons/fa/user';

	import { amount } from '../stores/cartStore';
	import StickyNavElement from './StickyNavElement.svelte';
</script>

<ul class="flex flex-row align-middle font-medium h-full">
	<StickyNavElement url="/" text="Help">
		<Question class="text-xl" />
	</StickyNavElement>

	<StickyNavElement url="/" text="Winkel info">
		<Store class="text-xl" />
	</StickyNavElement>
	<StickyNavElement url="/" text="Mijn Account">
		<User class="text-xl" />
	</StickyNavElement>
	<StickyNavElement
		url="/cart"
		text="Winkelwagen"
		styles="z-10 flex items-center justify-center flex-col relative p-3 pr-4 bg-yellow-300 h-full before:origin-top-left before:skew-x-[-10deg] before:bg-yellow-300 before:absolute before:top-0 before:left-0 before:-z-10 before:w-full before:h-full"
	>
		<Cart class="text-xl" />
		{#await $amount then amount}
			<div
				class="absolute flex justify-center items-center top-1 left-[50%] px-1 text-[12px] min-w-[1.6rem] aspect-square bg-blue-600 text-white rounded-full"
			>
				{amount}
			</div>
		{/await}
	</StickyNavElement>
</ul>
