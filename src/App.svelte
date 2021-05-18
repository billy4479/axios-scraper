<script lang="ts">
  import Input from './Components/Input.svelte';
  import MarkTable from './Components/MarkTable.svelte';
  import DarkModeToggle from './Components/DarkModeToggle.svelte';
  import { data } from './store';
  import './tailwind.css';

  function reset() {
    data.set([]);
  }

</script>

<h1 class="text-6xl text-red-600 mb-24">Media</h1>

<DarkModeToggle />

{#if $data.length === 0}
  <Input />
{:else}
  <MarkTable />
  <button
    class="m-3 ml-5 mr-5 p-5 rounded shadow bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
    on:click={reset}>Reset</button
  >
{/if}

<style global>
  body {
    width: 85%;
    margin: 5% auto;
    text-align: center;
  }

  * {
    transition-duration: 200ms;
  }

</style>
