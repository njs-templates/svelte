<script lang="ts">
	import HelloWorld from "$lib/components/HelloWorld.svelte";
</script>

<main>
	<div class="main-content">
		<a
			href="https://vitejs.dev"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="/vite.svg"
				class="logo"
				alt="Vite logo"
			/>
		</a>
		<a
			href="https://vuejs.org/"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="../assets/vue.svg"
				class="logo vue"
				alt="Svelte logo"
			/>
		</a>
	</div>
	<HelloWorld msg="Vite + Svelte Kit + TypeScript" />
</main>

<style scoped>
	.main-content {
		@apply flex place-content-center;
		margin: 0 auto;
	}

	.logo {
		height: 10em;
		padding: 1.5em;
		will-change: filter;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}

	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
