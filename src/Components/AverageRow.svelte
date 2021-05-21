<script lang="ts">
  import { average } from '../store';
  import MarkAndValue from '../Models/markAndValue';
  import Mark from './Mark.svelte';

  let av = 0;

  average.subscribe(computeAverage);

  function computeAverage(): void {
    let markSum = 0;
    let valueSum = 0;

    $average.forEach((v) => {
      let tmpMark = Number.isNaN(v.mark) ? 0 : v.mark;
      markSum += tmpMark * v.value;
      valueSum += v.value;
    });

    av = Math.round((markSum / valueSum) * 100) / 100;
  }

</script>

<tr>
  <td class="subject">Media</td>
  <td>
    <div class="average">
      <Mark
        mark={new MarkAndValue(av, 100)}
        isAverage={true}
        isAverageRow={true}
      />
    </div>
  </td>
  <td class="mark-container" />
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
    font-weight: bold;
  }

  .average {
    display: flex;
    flex-direction: row;
    place-content: center;
  }

</style>
