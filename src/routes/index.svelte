<script context="module" lang="ts">
  declare const __SNOWPACK_ENV__: any
  const version = __SNOWPACK_ENV__.VERSION
</script>

<script lang="ts">
  import { _ } from 'svelte-i18n'
</script>

<main class="container">
  <img src="/logo.png" alt="Logotipo" />
  <h1 class="title">{$_('title')}</h1>
  <p class="description">
    {$_('description')}
    <br />
    <i><small>{$_('version')} {version}</small></i>
  </p>
  <a class="button" href="/setup">{$_('personalize')}</a>
</main>

<style lang="scss">
  main.container {
    margin-top: 7.5rem;
    margin-bottom: 7.5rem;
    text-align: center;

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
