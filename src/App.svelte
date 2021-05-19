<script lang="ts">
  import Input from './Components/Input.svelte';
  import MarkTable from './Components/MarkTable.svelte';
  import Header from './Components/Header.svelte';
  import { data } from './store';
  import './tailwind.css';
  import './styles.css';

  function reset() {
    data.set([]);
  }

</script>

<Header title="Media" />

{#if $data.length === 0}
  <Input />
{:else}
  <MarkTable />
  <button on:click={reset}>Reset</button>
{/if}

<style global type="postcss">
  body {
    width: 85%;
    margin: 5% auto;
    text-align: center;
  }

  * {
    transition-duration: 200ms;
  }

</style>
