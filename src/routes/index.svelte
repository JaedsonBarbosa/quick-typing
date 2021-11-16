<script context="module" lang="ts">
  declare const __SNOWPACK_ENV__: any
  const version = __SNOWPACK_ENV__.VERSION
</script>


<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { customText, letters } from '../settings'

  const lettersPattern = '([^ ]{1,}( |$)){8}'
</script>

<header class="header">
  <section class="container">
    <img src="/logo.png" alt="Logotipo" />
    <h1 class="title">{$_('title')}</h1>
    <p class="description">
      {$_('description')}
      <br />
      <i><small>{$_('version')} {version}</small></i>
    </p>
    <a class="button" href="#header_options">{$_('personalize')}</a>
  </section>
</header>

<main>
  <form class="container" on:submit|preventDefault>
    <h2 id="header_options">{$_('options')}</h2>
    <label>
      {$_('letters')}
      <br />
      <small>{$_('letters-info')}</small>
      <input pattern={lettersPattern} required bind:value={$letters} />
    </label>
    <label>
      {$_('custom-text')}
      <br />
      <small>{$_('custom-text-info')}</small>
      <textarea minlength="100" bind:value={$customText} />
    </label>
    <input type="submit" value={$_('start')} />
  </form>
</main>

<style lang="scss">
  small {
    font-weight: lighter;
  }

  main {
    margin-top: 12.5rem;
    margin-bottom: 7.5rem;
  }
</style>
