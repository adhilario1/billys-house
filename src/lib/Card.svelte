<script>
    let { horizontal=false, children } = $props();
</script>

<div class="card {horizontal}">
    <div class='content'>
        {@render children()}
    </div>
</div>



<style>
    .card {
        display: block;
        border-radius: 25px;
        max-height: 90vh;
        width: 90vw;
        overflow-y: scroll;
        overflow-x: auto;
        background-color: #fff;
        margin: 1vh auto;
        color: black;
    }

    .content {
        margin: 10px;
        text-align: center;
    }
    .horizontal {
        overflow-y: auto;
        overflow-x: scroll;
        color: blue;
    }
</style>