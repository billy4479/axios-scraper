<script lang="ts">
  import MarkAndValue from '../Models/markAndValue';
  import TableRow from './TableRow.svelte';
  import AverageRow from './AverageRow.svelte';
  import Help from './Help.svelte';
  import { average, data, roundAverage } from '../store';
  import AddSubjectRow from './AddSubjectRow.svelte';
  import { writable } from 'svelte/store';

  const markMap = writable(new Map<string, MarkAndValue[]>());
  const wasAddedLaterStore = writable<string[]>([]);

  markMap.update((mm) => {
    $data.forEach((v) => {
      const m = v.mark;
      const va = v.value;
      if (!mm.has(v.subject)) mm.set(v.subject, []);
      mm.get(v.subject).push(new MarkAndValue(m, va));
    });
    return mm;
  });

  function reset() {
    data.set([]);
    average.set(new Map());
  }

  function handleAddSubject(event: CustomEvent<string>) {
    markMap.update((mm) => {
      mm.set(event.detail, []);
      return mm;
    });
    wasAddedLaterStore.update((wals) => {
      wals.push(event.detail);
      return wals;
    });
  }

  function handleDeleteSubject(event: CustomEvent<string>) {
    markMap.update((mm) => {
      if (mm.has(event.detail)) {
        mm.delete(event.detail);
      }
      return mm;
    });
    wasAddedLaterStore.update((wals) => {
      if (wals.includes(event.detail))
        wals.splice(wals.indexOf(event.detail), 1);
      return wals;
    });
  }

</script>

<div class="stuff">
  <table>
    <thead>
      <th>Materia</th>
      <th>Media</th>
      <th>Voti</th>
    </thead>
    <tbody>
      {#each Array.from($markMap.keys()) as sub}
        <TableRow
          subject={sub}
          marks={$markMap.get(sub)}
          wasAddedLater={$wasAddedLaterStore.includes(sub)}
          on:deleteSubject={handleDeleteSubject}
        />
      {/each}
      <AddSubjectRow on:addSubject={handleAddSubject} />
      <AverageRow />
    </tbody>
  </table>
</div>

<div
  class="checkbox-container light-stuff"
  on:click={() => {
    roundAverage.update((v) => !v);
  }}
>
  <label for="round-averages">Arrotonda le medie</label>
  <input type="checkbox" name="round-averages" bind:checked={$roundAverage} />
</div>
<button on:click={reset}>Reset</button>
<Help what="marks" />

<style>
  table {
    width: 100%;
  }

  div {
    margin: 0;
    overflow: auto;
  }

  th {
    border: solid 1px theme('colors.gray.500');
    padding: 1em;
  }

  .checkbox-container {
    display: grid;
    width: fit-content;
    margin: 1rem auto 0 auto;
    grid-template: 2rem / 3fr 1fr;
    place-items: center;
    cursor: pointer;
  }

  .checkbox-container label {
    @apply my-4;
    @apply mr-3;
  }

  /* .checkbox-container input {
  } */

</style>
