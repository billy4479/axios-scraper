<script lang="ts">
  import { isOverlayShown } from '../store';
  import Overlay from './Overlay.svelte';
  import PlusSVG from '../SVG/Plus.svelte';

  let showThisOverlay = false;
  export let sub: string;

</script>

{#if showThisOverlay}
  <Overlay on:addMark {sub} bind:toggle={showThisOverlay} />
{/if}
<div
  class="svg-container"
  on:click={() => {
    if (!$isOverlayShown) showThisOverlay = true;
  }}
>
  <PlusSVG />
</div>

<style>
  .svg-container {
    display: grid;
    place-items: center;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }

</style>
