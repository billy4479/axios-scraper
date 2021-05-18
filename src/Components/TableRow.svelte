<script lang="ts">
  import MarkAndValue from '../Models/markAndValue';
  import Mark from './Mark.svelte';

  export let marks: MarkAndValue[];
  export let subject: string;

  function computeAverage(): number {
    let markSum = 0;
    let valueSum = 0;

    marks.forEach((v) => {
      markSum += v.mark * v.value;
      valueSum += v.value;
    });

    return Math.round((markSum / valueSum) * 100) / 100;
  }

</script>

<tr>
  <td class="subject">{subject}</td>
  <td class="average">
    <Mark mark={new MarkAndValue(computeAverage(), 100)} showValue={false} />
  </td>
  <td class="mark-container">
    {#each marks as m}
      <Mark mark={m} />
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

</style>
