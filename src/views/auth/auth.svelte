<script>
export let components;
</script>

<div class="card">
    <h1>Auth</h1>
    {#each components as { component, props, children }}
        <svelte:component this={component} {children} {...props} />
    {/each}
</div>
