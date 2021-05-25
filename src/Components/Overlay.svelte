<script lang="ts">
  import MarkAndValue from '../Models/markAndValue';
  import { isOverlayShown } from '../store';
  import { createEventDispatcher, onMount } from 'svelte';
  import CrossSVG from '../SVG/Cross.svelte';

  const dispatch =
    createEventDispatcher<{
      addMark: MarkAndValue;
      deleteMark: MarkAndValue;
      editMark: { original: MarkAndValue; new: MarkAndValue };
      addSubject: string;
    }>();
  let mark: number = 10;
  let value: number = 100;
  export let sub: string = '';
  export let toggle: boolean;
  export let existingMark: MarkAndValue | null = null;
  export let addSubject = false;

  onMount(() => {
    isOverlayShown.set(true);
    if (existingMark !== null) {
      mark = existingMark.mark;
      value = existingMark.value;
    }
  });

  function closeThis(): void {
    toggle = false;
    isOverlayShown.set(false);
  }

  function submitMark() {
    if (addSubject) {
      dispatch('addSubject', sub);
    } else if (existingMark === null)
      dispatch('addMark', new MarkAndValue(mark, value, true));
    else
      dispatch('editMark', {
        original: existingMark,
        new: new MarkAndValue(mark, value, true),
      });
    closeThis();
  }

  function deleteMark() {
    dispatch('deleteMark', existingMark!);
    closeThis();
  }

</script>

<div class="overlay">
  <form
    class="content stuff bg-white dark:bg-gray-800"
    on:submit|preventDefault={submitMark}
  >
    <h2 class="text-3xl m-10">
      {#if addSubject}
        Inserisci una nuova materia
      {:else if existingMark === null}
        Inserisci un voto in <br /> {sub}
      {:else}
        Modifica voto
      {/if}
    </h2>

    <button class="close-button" on:click={closeThis}>
      <CrossSVG />
    </button>

    <div class="input-container">
      {#if !addSubject}
        <label for="mark">Voto:</label>
        <input
          name="mark"
          type="number"
          max="10"
          min="0"
          step="0.01"
          bind:value={mark}
        />
        <label for="value">Valore:</label>
        <input
          name="value"
          type="number"
          max="100"
          min="0"
          step="0.01"
          bind:value
        />{:else}
        <label for="sub">Nome materia:</label>
        <input
          name="sub"
          type="text"
          autocomplete="off"
          bind:value={sub}
          placeholder="Es: Condotta, Matematica..."
        />
      {/if}
    </div>

    <input
      type="submit"
      value={existingMark === null ? 'Inserisci' : 'Conferma'}
    />
    {#if existingMark !== null}
      <button class="delete-button" on:click={deleteMark}>Cancella</button>
    {/if}
  </form>
</div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .content {
    /* padding-left: 7rem;
    padding-right: 7rem; */
    position: relative;
  }

  input[type='submit'] {
    display: inline;
    margin: 2rem 1rem;
    @apply bg-green-600;
    @apply text-white;
  }

  input[type='submit']:hover {
    @apply bg-green-800;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .close-button {
    position: absolute;
    padding: 0;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
  }

  .input-container {
    display: grid;
    grid-template: 1fr / 1fr 2fr;
    align-items: center;
  }

  .delete-button {
    @apply text-white;
    @apply bg-red-500;
    display: inline;
    margin: 2rem 1rem;
  }

  .delete-button:hover {
    @apply bg-red-800;
  }

</style>
