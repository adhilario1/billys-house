<script>
    let { color="emerald", intensity="950", alpha="100", horizontal=false, children } = $props();
</script>

<div class="flex justify-center bg-{color}-{intensity}/{alpha} card {horizontal}">
    <div class='content'>
        {@render children()}
    </div>
</div>



<style>
    .card {
        border-radius: 10px;
        height: 98vh;
        width: 99vw;
        overflow-y: scroll;
        overflow-x: auto;
        margin: 1vh auto;
        color: black;
        
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        
        margin: 10px;
        text-align: center;
        align-items: center;
    }
    .horizontal {
        overflow-y: auto;
        overflow-x: scroll;
        color: blue;
    }
</style>