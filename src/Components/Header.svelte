<script lang="ts">
  import DarkModeToggle from './DarkModeToggle.svelte';

  export let title = '';

</script>

<header class="mb-2">
  <h1 class="text-6xl text-red-600 mb-2">{title}</h1>
  <DarkModeToggle />
</header>

<style></style>
