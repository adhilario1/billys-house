<script lang="ts">
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();

    let open = $state(false);

    /*
    let canvas: HTMLCanvasElement = $state();
    let context =  $state();
    
    $effect(() => {
        context = canvas.getContext('2d');
        resize();
    });

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight
    }
    */
</script>
<!--
<svelte:window onresize={resize} />

<canvas
    bind:this={canvas}
></canvas>
-->
<div class={["submenu", {open}]}>
    {#each data.sections as section}
        <a class = menu-item style:color="red" href="/{section.slug}">{section.title}</a>
    {/each}
</div>
    
<style>
    .submenu {
        color: red;
        size: 5em;
    }

    .menu-item {
        display: block;
    }

    
</style>

{@render children()}