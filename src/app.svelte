<script>	
import state, { components } from "shared/stores/state.js";
</script>

<div class="view">
	{#each $components as { component, props, children }}
		<svelte:component this={component} components={children} {...props} />
	{/each}
</div>
