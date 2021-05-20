<script lang="ts">
  import scrape from '../scraper';
  import Help from './Help.svelte';

  let html = '';
  let file: FileList;

  async function onSubmit() {
    if (file && file.length > 0) {
      scrape(await file.item(0).text());
    } else {
      scrape(html);
    }
  }

</script>

<form>
  <div class="m-5">
    <input class="stuff" type="file" bind:files={file} />
  </div>

  <textarea
    bind:value={html}
    name="html-input"
    cols="10"
    rows="5"
    class="stuff"
    placeholder="Incolla l'HTML qui..."
    autocomplete="off"
  />

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
  }

  textarea {
    width: 100%;
    resize: none;
    overflow: auto;
    margin: 2.5rem auto;
    display: block;
  }

  div {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    place-content: center;
  }

  input[type='file'] {
    width: 100%;
    display: block;
    margin: 0;
  }

  input[type='submit'] {
    cursor: pointer;
  }

</style>
