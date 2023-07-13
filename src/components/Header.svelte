<script>
	import Hamburger from '~icons/fa/bars';
	import Cart from '~icons/fa/shopping-cart';
	import Question from '~icons/fa/question';
	import Store from '~icons/fa/building';
	import User from '~icons/fa/user';
	import Search from '~icons/fa/search';

	let input = '';
	let count = 0;
</script>

<header class="sticky translate-x-0 z-20 top-0 left-0">
	<div class="bg-white w-full drop-shadow-md">
		<div class="flex flex-wrap justify-between sm:justify-normal sm:flex-nowrap sm:gap-1">
			<a href="/" class="flex items-center order-2 p-2">
				<img src="/decathlonLogo.jpg" class="min-w-[12rem] max-h-11 object-contain" alt="Logo" />
			</a>
			<div class="order-1 border-r-gray-20">
				<button
					data-collapse-toggle="navbar-sticky"
					type="button"
					class="flex gap-1 flex-col p-3 justify-center items-center h-full border-r border-gray-200"
					aria-controls="navbar-sticky"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<Hamburger />
					<span class="text-xs">Menu</span>
				</button>
			</div>
			<div class="items-center md:flex md:w-auto order-3 sm:order-4" id="navbar-sticky">
				<ul class="flex flex-row align-middle font-medium h-full">
					<li>
						<a
							href="/"
							class="hidden text-xs sm:flex items-center justify-center flex-col h-full py-2 pl-3 pr-4"
						>
							<Question class="text-xl" />
							<span class="hidden uppercase lg:block">Help</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							class="hidden text-xs sm:flex items-center justify-center flex-col h-full py-2 pl-3 pr-4"
						>
							<Store class="text-xl" />
							<span class="hidden uppercase lg:block">Winkel info</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							class="hidden text-xs sm:flex items-center justify-center flex-col h-full py-2 pl-3 pr-4"
						>
							<User class="text-xl" />
							<span class="hidden uppercase lg:block">Mijn account</span>
						</a>
					</li>
					<li>
						<a
							href="/cart"
							class="flex items-center justify-center flex-col relative p-3 pr-4 bg-yellow-300 h-full before:origin-top-left before:skew-x-[-10deg] before:bg-yellow-300 before:absolute before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full"
						>
							<Cart class="text-xl" />
							<div
								class="absolute flex justify-center items-center top-1 left-[50%] px-1 text-[12px] min-w-[1.6rem] aspect-square bg-blue-600 text-white rounded-full"
							>
								{count}
							</div>
							<span class="hidden uppercase text-xs lg:block">Winkelwagen</span>
						</a>
					</li>
				</ul>
			</div>
			<div
				class="order-4 w-full p-2 border border-gray-200 sm:order-3 sm:grow sm:w-0 sm:border-none"
			>
				<form class="flex w-full border border-gray-200 bg-gray-200">
					<input
						class="p-2 min-w-0 grow placeholder:uppercase placeholder:italic placeholder:font-semibold focus:outline-non bg-transparent"
						inputmode="text"
						bind:value={input}
						placeholder="Zoek een artikel of sport"
					/>
					<button
						class="z-10 relative bg-white h-full p-3 before:absolute before:bg-white before:w-full before:origin-top-left before:h-full before:skew-x-[-10deg] before:top-0 before:left-0 before:-z-10"
					>
						<Search class="z-10" />
					</button>
				</form>
			</div>
		</div>
	</div>
</header>
