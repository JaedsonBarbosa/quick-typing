<script lang="ts">
  import { _ } from 'svelte-i18n'
  import Begin from './Begin.svelte'
  import Play from './Play.svelte'

  let play = false
</script>

<svelte:head>
  <title>{$_('title')}</title>
</svelte:head>

{#if play}
  <Play />
{:else}
  <Begin on:submit={() => (play = true)} />
{/if}

<style global lang="scss">
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic';
  @import 'normalize.css';
  @import 'milligram/src/milligram.sass';

  html {
    background-color: white;
  }

  // @media (prefers-color-scheme: dark) {
  //   html {
  //     filter: invert(100%);
  //   }
  // }

  .header {
    background-color: $color-tertiary;
    padding-top: 5rem;
    margin-bottom: -5rem;

    & + section {
      border-top: 0;
    }

    .container {
      border-top: 0;
      padding-bottom: 7.5rem;
      padding-top: 7.5rem;
      position: relative;
      text-align: center;
    }

    img {
      height: 15rem;
      margin-bottom: 2rem;
    }

    .button {
      margin-bottom: 4rem;
      margin-top: 2rem;

      @media (min-width: 40rem) {
        margin-bottom: 4rem;
        margin-top: 2rem;
      }
    }
  }
</style>
