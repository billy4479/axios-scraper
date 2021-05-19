<script lang="ts">
  export let what: string = '';

  let showHelp = false;

  function toggleHelp() {
    showHelp = !showHelp;
  }

</script>

<button on:click|preventDefault={toggleHelp}>Help</button>
{#if showHelp}
  <div class="text-left stuff">
    {#if what === 'input'}
      <ol>
        <li>
          Apri il registro elettronico (<strong>DAL BROWSER</strong>)
        </li>
        <li>Vai nella pagina dei voti</li>
        <li>
          Salva la pagina. Se sei da PC usa <code>Ctrl+S</code>, se sei da
          mobile cerca nelle opzioni del tuo browser
        </li>
        <li>
          Carica il file <code>.html</code> oppure incolla il contenuto nella casella
          di testo.
        </li>
        <li>Clicca su "Calcola Media"!</li>
      </ol>
    {/if}
  </div>
{/if}

<style>
  ol {
    list-style: decimal;
  }

  div {
    @apply pl-10;
  }

</style>
