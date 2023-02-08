<script lang="ts">
	import { page, setPageStore } from "$lib/stores/pageStore";

	let currentPage: string;
	page.subscribe((value) => {
		currentPage = value;
	});

	// Define href's here
	const homeHref = "/";
	const otherHref = "/other";
</script>

<div
	id="nav"
	class="tabs justify-center pb-6"
>
	<a
		href={homeHref}
		on:click={() => {
			setPageStore(homeHref);
			console.log(currentPage);
		}}
		class={currentPage === homeHref
			? "tab tab-bordered tab-active"
			: "tab tab-bordered"}>Home</a
	>
	<a
		href={otherHref}
		on:click={() => {
			setPageStore(otherHref);
			console.log(currentPage);
		}}
		class={currentPage === otherHref
			? "tab tab-bordered tab-active"
			: "tab tab-bordered"}>Other page</a
	>
</div>
