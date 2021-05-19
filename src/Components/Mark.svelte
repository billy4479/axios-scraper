<script lang="ts">
  import type MarkAndValue from '../Models/markAndValue';

  export let mark: MarkAndValue;
  export let showValue: boolean = true;
  export let expand: boolean = false;

  const actualValue = mark.value;

  function toggleMakesAverage() {
    if (showValue) mark.value = mark.value === actualValue ? 0 : actualValue;
  }

</script>

<div
  class:red={mark.mark < 6}
  class="text-gray-100"
  class:expand
  class:no-average={mark.value === 0}
  on:click={toggleMakesAverage}
  class:select-none={showValue}
>
  {#if showValue}
    {mark.mark}
    <br />
    {mark.value}%
  {:else}
    {mark.mark.toFixed(2)}
  {/if}
</div>

<style>
  div {
    height: 3em;
    width: 3em;
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

  .expand {
    width: 100%;
    font-weight: bold;
    @apply underline;
  }

  .no-average {
    @apply bg-blue-700;
  }

</style>
