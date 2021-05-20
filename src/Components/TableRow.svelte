<script lang="ts">
  import { average, roundAverage } from '../store';
  import MarkAndValue from '../Models/markAndValue';
  import Mark from './Mark.svelte';
  import { writable } from 'svelte/store';
  import PlusButton from './PlusButton.svelte';

  export let marks: MarkAndValue[];
  export let subject: string;
  let makesAverage: boolean = true;

  let marksStore = writable(marks);
  let av = writable<MarkAndValue>(computeAverage());

  marksStore.subscribe(() => {
    av.set(computeAverage());
  });
  roundAverage.subscribe(() => {
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
      $roundAverage
        ? Math.round(markSum / valueSum)
        : Math.round((markSum / valueSum) * 100) / 100,
      makesAverage && valueSum !== 0 ? 100 : 0
    );
  }

  function addMarkHandler(event: CustomEvent<MarkAndValue>) {
    marksStore.update((v) => {
      return [...v, event.detail];
    });
  }

  function editMarkHandler(
    event: CustomEvent<{ original: MarkAndValue; new: MarkAndValue }>
  ) {
    marksStore.update((v) => {
      v[v.indexOf(event.detail.original)] = event.detail.new;
      return v;
    });
  }

  function deleteMarkHandler(event: CustomEvent<MarkAndValue>) {
    marksStore.update((v) => {
      v.splice(v.indexOf(event.detail), 1);
      return v;
    });
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
      <Mark
        bind:mark={m}
        on:deleteMark={deleteMarkHandler}
        on:editMark={editMarkHandler}
      />
    {/each}
    <PlusButton on:addMark={addMarkHandler} sub={subject} />
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
    border: solid 1px theme('colors.gray.500');
    text-align: left;
  }

  .average {
    display: flex;
    flex-direction: row;
    place-content: center;
  }

</style>
