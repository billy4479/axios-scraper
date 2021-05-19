<script lang="ts">
  import type MarkAndValue from 'src/Models/markAndValue';

  export let mark: MarkAndValue;
  export let showValue: boolean = true;
  export let expand: boolean = false;

</script>

<div class:red={mark.mark < 6} class="text-gray-100" class:expand>
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
  }

  .red {
    @apply bg-red-600;
  }

  .expand {
    width: 100%;
    font-weight: bold;
    @apply underline;
  }

</style>
