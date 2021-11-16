<script context="module" lang="ts">
  declare const __SNOWPACK_ENV__: any
  const version = __SNOWPACK_ENV__.VERSION
</script>

<script lang="ts">
  import { _ } from 'svelte-i18n'
</script>

<main class="header">
  <section class="container">
    <img src="/logo.png" alt="Logotipo" />
    <h1 class="title">{$_('title')}</h1>
    <p class="description">
      {$_('description')}
      <br />
      <i><small>{$_('version')} {version}</small></i>
    </p>
    <a class="button" href="/setup">{$_('personalize')}</a>
  </section>
</main>
