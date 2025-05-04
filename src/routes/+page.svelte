<script>
    import './../app.css';
    import Card from '$lib/Card.svelte';
    import Header from '$lib/Header.svelte'
</script>


<Card >
    <Header />
    <div class="flex flex-col justify-center text-red-50 m-10 font-mono">
        <h1 class="text-9xl">billy's house</h1>
        <p class="m-5">a collection of my work, education, and general interest projects</p>
    </div>
</Card>

<Card alpha="0">
    <p class='text-red-50'>test</p>
</Card>


