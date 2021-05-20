<script lang="ts">
  export let what: string = '';

  let showHelp = false;

  function toggleHelp() {
    showHelp = !showHelp;
  }

</script>

<button on:click|preventDefault={toggleHelp}>Help</button>
{#if showHelp}
  <div class="text-left stuff container">
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
    {:else if what === 'marks'}
      <p>Clicca su un voto per rendere il suo valore 0%.</p>
      <p>
        Clicca sul '+' per aggiungere un voto e vedere come cambia la media.
      </p>
      <p>Legenda:</p>
      <ul>
        <li>
          <div class="bg-red-600 box" />
          : Insufficiente
        </li>
        <li>
          <div class="bg-green-600 box" />
          : Sufficiente
        </li>
        <li>
          <div class="bg-blue-700 box" />
          : Non fa media
        </li>
        <li>
          <div class="bg-purple-600 box" />
          : Aggiunto successivamente
        </li>
      </ul>
    {/if}
  </div>
{/if}

<style>
  ol {
    list-style: decimal;
  }

  .container {
    @apply pl-10;
  }

  .box {
    width: 1em;
    height: 1em;
    display: inline-block;
    margin-left: 1em;
  }

</style>
