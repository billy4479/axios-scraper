<script lang="ts">
  import type MarkAndValue from '../Models/markAndValue';
  import Overlay from './Overlay.svelte';

  export let mark: MarkAndValue;
  export let isAverage = false;
  export let isAverageRow = false;

  const actualValue = mark.value;
  let showThisOverlay: boolean = false;

  function handleClick() {
    if (mark.wasAddedLater) {
      showThisOverlay = true;
      return;
    }
    if (!(isAverage && Number.isNaN(mark.mark)) && !isAverageRow)
      mark.value = mark.value === actualValue ? 0 : actualValue;
  }

</script>

{#if showThisOverlay}
  <Overlay
    on:editMark
    on:deleteMark
    existingMark={mark}
    bind:toggle={showThisOverlay}
  />
{/if}
<div
  class:red={mark.mark < 6 && !mark.wasAddedLater}
  class="text-gray-100"
  class:expand={isAverage}
  class:blue={mark.value === 0 && !mark.wasAddedLater}
  on:click={handleClick}
  class:select-none={!isAverage}
  class:purple={mark.wasAddedLater}
>
  {#if !isAverage}
    {mark.mark}
    <br />
    {mark.value}%
  {:else}
    {mark.mark.toFixed(2)}
  {/if}
</div>

<style>
  div {
    height: 3rem;
    width: 3rem;
    @apply bg-green-600;
    margin: 0;
    display: grid;
    place-content: center;
    border: solid 1px theme('colors.gray.500');
    cursor: pointer;
  }

  .red {
    @apply bg-red-600;
  }

  .purple {
    @apply bg-purple-600;
  }

  .expand {
    width: 100%;
    font-weight: bold;
    @apply underline;
  }

  .blue {
    @apply bg-blue-700;
  }

</style>
