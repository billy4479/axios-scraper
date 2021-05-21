<script lang="ts">
  import { darkMode } from '../store';
  import SunSVG from '../SVG/Sun.svelte';
  import MoonSVG from '../SVG/Moon.svelte';

  const doc = document.getElementsByTagName('html')[0];

  darkMode.subscribe((d) => {
    localStorage.setItem('darkMode', d ? 'dark' : 'light');

    if (d) doc.className = 'dark';
    else doc.className = doc.className.replace('dark', '');
  });

  function toggleDarkMode() {
    darkMode.set(!$darkMode);
  }

</script>

<button on:click={toggleDarkMode}>
  {#if $darkMode}
    <MoonSVG />
  {:else}
    <SunSVG />
  {/if}
</button>

<style>
</style>
