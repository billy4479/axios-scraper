<script lang="ts">
  import scrape from '../scraper';
  import Help from './Help.svelte';

  let html = '';
  let file: FileList;

  async function onSubmit() {
    if (file.length > 0) {
      scrape(await file.item(0).text());
    } else {
      scrape(html);
    }
  }

</script>

<form>
  <textarea
    bind:value={html}
    name="html-input"
    cols="30"
    rows="10"
    class="stuff"
    placeholder="Incolla l'HTML qui..."
    autocomplete="off"
  />

  <div class="m-5">
    <input class="stuff" type="file" bind:files={file} />
  </div>

  <input
    type="submit"
    value="Calcola Media"
    on:click|preventDefault={onSubmit}
  />

  <Help what="input" />
</form>

<style>
  form {
    text-align: center;
    margin: 0 auto;
    width: 100%;
  }

  textarea {
    width: 100%;
    resize: none;
    overflow: auto;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    place-content: center;
  }

  input[type='file'] {
    display: block;
  }

  input[type='submit'] {
    cursor: pointer;
  }

</style>
