<script lang="ts">
  import Input from './Components/Input.svelte';
  import MarkTable from './Components/MarkTable.svelte';
  import Header from './Components/Header.svelte';
  import { data } from './store';
  import './tailwind.css';
  import './styles.css';
  import Footer from './Components/Footer.svelte';

</script>

<main>
  <Header title="Media" />

  {#if $data.length === 0}
    <Input />
  {:else}
    <MarkTable />
  {/if}
</main>

<Footer />

<style global type="postcss">
  body {
    width: 75%;
    margin: 5% auto;
    text-align: center;
  }

  main {
    min-height: calc(100vh - 175px);
    min-width: 300px;
  }

  * {
    transition-duration: 200ms;
  }

</style>
