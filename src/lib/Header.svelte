<script lang='ts'>
    import { onMount } from 'svelte';
    //import type { LayoutProps } from './$types';
    import { fade } from 'svelte/transition';

    //let { data, children }: LayoutProps = $props();

    
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

<div class="flexbox rounded-2xl bg-red-50 h-20 w-100">
    <div class="flex justify-center items-center font-serif">
        <svg width="100%" height="100%" 
            viewBox="0 0 1080 1080" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            xml:space="preserve"  
            class="bg-none fill-none stroke-emerald-950 stroke-40 size-20 margin-auto p-2" 
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
        >
            <circle cx="540" cy="540" r="500"/><g id="Layer1">
            <path d="M787.674,974.302l-483.139,-866.86l-13.954,840.697c7.422,-350.651 293.355,-475.987 729.21,-472.674l-958.105,1.814"/>
            <path d="M491.163,49.884l457.116,770.79" /></g>
        </svg>
        <h1 class="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-emerald-950">Adam<br>Hilario</h1>
    </div>
</div>

{#if y > 100}
<div class="fixed z-100 t-0 l-0 flex flex-row justify-around items-center rounded-2xl bg-red-50 h-20 w-100">
    <div class="flex justify-center items-center font-serif">
        <svg width="100%" height="100%" 
            viewBox="0 0 1080 1080" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            xml:space="preserve"  
            class="bg-none fill-none stroke-emerald-950 stroke-40 size-20 margin-auto p-2" 
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
        >
            <circle cx="540" cy="540" r="500"/><g id="Layer1">
            <path d="M787.674,974.302l-483.139,-866.86l-13.954,840.697c7.422,-350.651 293.355,-475.987 729.21,-472.674l-958.105,1.814"/>
            <path d="M491.163,49.884l457.116,770.79" /></g>
        </svg>
        <h1 class="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-emerald-950">Adam<br>Hilario</h1>
    </div>

    <div class="flex">
        <a href="/about">about</a>
        <p> | </p>
        <a href="/demo">demo</a>
    </div>
</div>
{/if}




