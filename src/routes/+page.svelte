<script>
    import './../app.css';
    import Card from '$lib/Card.svelte';
    
</script>


{#each Array(3) as parentItem}
<Card horizontal={true}>
    <h1>Welcome to SvelteKit</h1>
    <p class="test">Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
    
    {#each Array(50) as item}
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    {/each}
</Card>
{/each}
<style>
    parentItem {
        padding: 25px;
    }
</style>


