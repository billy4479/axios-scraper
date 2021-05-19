<script lang="ts">
  import { average } from '../store';
  import MarkAndValue from '../Models/markAndValue';
  import Mark from './Mark.svelte';

  export let marks: MarkAndValue[];
  export let subject: string;
  let makesAverage: boolean = true;
  let av: number = 0;

  function computeAverage(): number {
    let markSum = 0;
    let valueSum = 0;

    marks.forEach((v) => {
      markSum += v.mark * v.value;
      valueSum += v.value;
    });

    av = Math.round((markSum / valueSum) * 100) / 100;

    average.update((c) =>
      c.set(subject, new MarkAndValue(av, makesAverage ? 100 : 0))
    );

    return av;
  }

  function toggleMakesAverage() {
    makesAverage = !makesAverage;
    average.update((c) =>
      c.set(subject, new MarkAndValue(av, makesAverage ? 100 : 0))
    );
  }

</script>

<tr>
  <td class="subject">{subject}</td>
  <td>
    <div class="average">
      <Mark
        mark={new MarkAndValue(computeAverage(), 100)}
        showValue={false}
        expand={true}
      />
    </div>
  </td>
  <td class="mark-container">
    {#each marks as m}
      <Mark mark={m} />
    {/each}
  </td>
  <td on:click={toggleMakesAverage}>
    <input type="checkbox" bind:checked={makesAverage} />
  </td>
</tr>

<style>
  td {
    width: max-content;
  }

  .mark-container {
    display: flex;
    flex-direction: row;
    justify-items: left;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .subject {
    padding-left: 1em;
    padding-right: 1em;
    border: solid 1px gray;
    text-align: left;
  }

  .average {
    display: flex;
    flex-direction: row;
    place-content: center;
  }

</style>
