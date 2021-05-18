<script lang="ts">
  import scrape from '../scraper';

  let html = '';

  function onSubmit() {
    scrape(html);
  }

</script>

<form>
  <textarea
    bind:value={html}
    name="html-input"
    cols="30"
    rows="10"
    class="rounded shadow bg-gray-100 p-5 dark:text-gray-100 dark:bg-gray-900"
    placeholder="Incolla l'HTML qui..."
    autocomplete="off"
  />

  <input
    type="submit"
    value="Calcola Media"
    class="m-5 p-5 rounded shadow bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
    on:click|preventDefault={onSubmit}
  />
</form>

<style>
  form {
    text-align: center;
    margin: 0 auto;
    width: 75%;
  }

  textarea {
    width: 100%;
    resize: none;
    overflow: auto;
  }

  input[type='submit'] {
    cursor: pointer;
  }

</style>
