<script lang="ts">
import { page, setPageStore } from "$lib/stores/pageStore";

let currentPage: string = $state();
page.subscribe((value) => {
	currentPage = value;
});

interface Props {
	href: string;
	label: string;
}

let { href, label }: Props = $props();
</script>

<a
	{href}
	onclick={() => {
		setPageStore(href);
		console.log(currentPage);
	}}
	class={currentPage === href
		? "tab tab-bordered tab-active"
		: "tab tab-bordered"}>{label}</a
>
