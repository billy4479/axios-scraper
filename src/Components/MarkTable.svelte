<script lang="ts">
  import MarkAndValue from '../Models/markAndValue';
  import TableRow from './TableRow.svelte';
  import AverageRow from './AverageRow.svelte';
  import Help from './Help.svelte';
  import { average, data } from '../store';

  const markMap = new Map<string, MarkAndValue[]>();

  $data.forEach((v) => {
    const m = v.mark;
    const va = v.value;
    if (!markMap.has(v.subject)) markMap.set(v.subject, []);
    markMap.get(v.subject).push(new MarkAndValue(m, va));
  });

  function reset() {
    data.set([]);
    average.set(new Map());
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
      {#each Array.from(markMap.keys()) as sub}
        <TableRow subject={sub} marks={markMap.get(sub)} />
      {/each}
      <AverageRow />
    </tbody>
  </table>
</div>
<button on:click={reset}>Reset</button>
<Help what="marks" />

<style>
  table {
    width: 100%;
  }

  div {
    overflow: auto;
  }

  th {
    border: solid 1px gray;
    padding: 1em;
  }

</style>
