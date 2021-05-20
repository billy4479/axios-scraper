<script lang="ts">
  import type MarkAndValue from '../Models/markAndValue';

  export let mark: MarkAndValue;
  export let isAverage = false;
  export let isAverageRow = false;

  const actualValue = mark.value;

  function toggleMakesAverage() {
    if (!(isAverage && Number.isNaN(mark.mark)) && !isAverageRow)
      mark.value = mark.value === actualValue ? 0 : actualValue;
  }

</script>

<div
  class:red={mark.mark < 6 && !mark.wasAddedLater}
  class="text-gray-100"
  class:expand={isAverage}
  class:blue={mark.value === 0 && !mark.wasAddedLater}
  on:click={toggleMakesAverage}
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
    border: solid 1px gray;
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
