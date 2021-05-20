<script lang="ts">
  import MarkAndValue from '../Models/markAndValue';
  import { darkMode, isOverlayShown } from '../store';
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher<{ addMark: MarkAndValue }>();
  let mark: number = 10;
  let value: number = 100;
  export let sub: string;
  export let toggle: boolean;

  onMount(() => {
    isOverlayShown.set(true);
  });

  function submitMark() {
    dispatch('addMark', new MarkAndValue(mark, value, true));
    isOverlayShown.set(false);
    toggle = false;
  }

</script>

<div class="overlay">
  <form
    class="content stuff bg-white dark:bg-gray-800"
    on:submit|preventDefault={submitMark}
  >
    <h2 class="text-3xl m-10">Inserisci un voto in {sub}</h2>

    <button
      on:click={() => {
        toggle = false;
        isOverlayShown.set(false);
      }}
    >
      <svg
        height="329pt"
        viewBox="0 0 329.26933 329"
        width="329pt"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          class:dark={$darkMode}
          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
        /></svg
      >
    </button>

    <div class="input-container">
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
      />
    </div>

    <input type="submit" value="Inserisci" />
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
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  .content {
    padding-left: 7rem;
    padding-right: 7rem;
    position: relative;
  }

  input[type='submit'] {
    display: block;
    margin: 2rem auto;
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

  button {
    position: absolute;
    padding: 0;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  path.dark {
    fill: white;
  }

  .input-container {
    display: grid;
    grid-template: 1fr / 1fr 2fr;
    align-items: center;
  }

</style>
