<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

{#await data.item.promise}
  [some nice loading animation]
{:then item}
  {#if item}
    <ul>
      {item.title}
    </ul>
  {/if}
{/await}