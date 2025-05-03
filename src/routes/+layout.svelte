<script lang='ts'>
    import { onMount } from 'svelte';
    import type { LayoutProps } from './$types';
    import { fade } from 'svelte/transition';

    let { data, children }: LayoutProps = $props();

    let windowHeight: number = $state(0);

    const debounce = <T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void => {
        let timer: ReturnType<typeof setTimeout>;

        return function (...args: Parameters<T>): void {
            //const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const setWindowHeight =() => {
        windowHeight = window.innerHeight as number;
    }

    const debounceSetWindowHeight =debounce(setWindowHeight, 300);

    onMount(() => {
        windowHeight = window.innerHeight;
        window.addEventListener('resize', debounceSetWindowHeight);

        return () => {
            window.removeEventListener('resize', debounceSetWindowHeight);
        }
    });

    let y = $state(0);
    

    const fadeIn = {
        delay: 100, 
        duration: 200
    };

    const fadeOut = {
        delay: 0, 
        duration: 100
    }

    let open = $state(false);
    let vertical = $state(false);

    
    
</script>

<svelte:window bind:scrollY={y} />

{#if y>(windowHeight/2)}
    {console.log("switch: " + y)}
    <nav class:expanded={open}>
        <button class="nav-button" onclick={() => open = !open}>
            {#if open}
                <span class="pixelarticons--close-box"></span>
            {:else}
                <span class='menu-icon'></span>
            {/if}
        </button>
        {#if open} 
            <div in:fade="{fadeIn}" out:fade="{fadeOut}">
                {#each data.sections as section}
                <div class="menu-item">
                    <a href="/{section.slug}">{section.title}</a>
                </div>
                {/each}
            </div> 
        {/if}
    </nav>

    <div class=auto-scroll>
        <div class='page up'>
            <span class="pixelarticons--arrow-bar-up" aria-label="page up"></span>
        </div>
        <div class="toTop">
            <span class='pixelarticons--home' aria-label="back to top"></span>
        </div>
        <div class="page down">
            <span class="pixelarticons--arrow-bar-down" aria-label="page down"></span>
        </div>
    </div>
{:else}
    

    <div class="static-header">
        <span class="logo"></span>
        <div>
        {#each data.sections as section}
        <div class="header-item">
            <a href="/{section.slug}">{section.title}</a>
        </div>
        {/each}
        </div>
    </div>
    
{/if}

<style>
    a {
        text-decoration: none;
        color: inherit;
    }

    nav {
        z-index: 100;
        position: fixed;
        grid-area: nav;
        
        transition: ease-out 200ms;
        width: 60px;
        overflow: hidden;
    }

    .auto-scroll {
        z-index: 100;
        position: fixed;
        height: 200px;
        width:5vw;
        bottom: 0;
        right: 0;
        background-color: blanchedalmond;
        align-content:center;
        
    }
    .expanded {
        background-color: #324754;
        color: #A2b7c4;

        transition: ease-out 200ms;
        padding: 20px;
        margin: 0;
    }

    .expanded button{ 
        border: none;
    }

    .header-item {
        color:white;
        display: flexbox;
        margin: auto;
        
    }

    .logo {
        display: inline-block;
        --svg: url("data:/logo.svg");
        color: #fff;
        width: 50px;
        height: 50px;
    }

    .menu-icon {
        display: inline-block;
        width: 32px;
        height: 32px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4 6h16v2H4zm0 5h16v2H4zm16 5H4v2h16z'/%3E%3C/svg%3E");
        background-color: white;
        -webkit-mask-image: var(--svg);
        mask-image: var(--svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;

    }

    .menu-item {
        display: block;
        color: green;
    }

    .nav-button {
        background: none;
        border:#fff 1px solid;
        border-radius: 5px;
    }

    .static-header {
        display: flex;
        background-color: #324754;
    }


    /* icons */
    .pixelarticons--close-box {
        display: inline-block;
        width: 32px;
        height: 32px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M5 3H3v18h18V3zm14 2v14H5V5zm-8 4H9V7H7v2h2v2h2v2H9v2H7v2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2v-2h2V9h2V7h-2v2h-2v2h-2z'/%3E%3C/svg%3E");
        background-color: white;
        -webkit-mask-image: var(--svg);
        mask-image: var(--svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }

    .pixelarticons--arrow-bar-up {
        display: inline-block;
        width: 3vw;
        height: 3vw;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4 6h16V4H4zm7 14h2v-8h2v2h2v-2h-2v-2h-2V8h-2v2H9v2H7v2h2v-2h2z'/%3E%3C/svg%3E");
        background-color: currentColor;
        -webkit-mask-image: var(--svg);
        mask-image: var(--svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }

    .pixelarticons--arrow-bar-down {
        display: inline-block;
        width: 3vw;
        height: 3vw;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11 4h2v8h2v2h-2v2h-2v-2H9v-2h2zm-2 8H7v-2h2zm6 0v-2h2v2zM4 18h16v2H4z'/%3E%3C/svg%3E");
        background-color: currentColor;
        -webkit-mask-image: var(--svg);
        mask-image: var(--svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }

    .pixelarticons--home {
        display: inline-block;
        width: 3vw;
        height: 3vw;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4z'/%3E%3C/svg%3E");
        background-color: currentColor;
        -webkit-mask-image: var(--svg);
        mask-image: var(--svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }
    
</style>

{@render children()}