<script lang="ts">
  import { average } from '../store';
  import MarkAndValue from '../Models/markAndValue';
  import Mark from './Mark.svelte';
  import { writable } from 'svelte/store';

  export let marks: MarkAndValue[];
  export let subject: string;
  let makesAverage: boolean = true;

  let marksStore = writable(marks);
  let av = writable<MarkAndValue>(computeAverage());

  marksStore.subscribe(() => {
    av.set(computeAverage());
  });
  av.subscribe((v) => {
    average.update((c) => c.set(subject, v));
  });

  function computeAverage(): MarkAndValue {
    let markSum = 0;
    let valueSum = 0;

    $marksStore.forEach((v) => {
      markSum += v.mark * v.value;
      valueSum += v.value;
    });

    return new MarkAndValue(
      Math.round((markSum / valueSum) * 100) / 100,
      makesAverage && valueSum !== 0 ? 100 : 0
    );
  }

</script>

<tr>
  <td class="subject">{subject}</td>
  <td>
    <div class="average">
      <Mark bind:mark={$av} isAverage={true} />
    </div>
  </td>
  <td class="mark-container">
    {#each $marksStore as m}
      <Mark bind:mark={m} />
    {/each}
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
