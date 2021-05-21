<script lang="ts">
  import { isOverlayShown } from '../store';

  import Overlay from './Overlay.svelte';

  let showThisOverlay = false;

</script>

<tr>
  <td
    on:click={() => {
      if (!$isOverlayShown) showThisOverlay = true;
    }}
  >
    Aggiungi una nuova materia...
  </td>
</tr>

{#if showThisOverlay}
  <Overlay on:addSubject addSubject={true} bind:toggle={showThisOverlay} />
{/if}

<style>
  td {
    width: max-content;
    padding-left: 1em;
    padding-right: 1em;
    height: 3rem;
    border: solid 1px gray;
    text-align: left;
    cursor: pointer;
  }

</style>
