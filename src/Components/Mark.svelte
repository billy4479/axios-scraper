<script lang="ts">
  import type MarkAndValue from 'src/Models/markAndValue';

  export let mark: MarkAndValue;
  export let showValue: boolean = true;

</script>

<div
  style={mark.mark >= 6 ? '' : 'background-color: darkred;'}
  class="text-gray-100"
>
  {mark.mark}
  {#if showValue}
    <br />
    {mark.value}%
  {/if}
</div>

<style>
  div {
    height: 3em;
    width: 3em;
    background-color: green;
    margin: 0;
    display: grid;
    place-content: center;
    border: solid 1px gray;
  }

</style>
