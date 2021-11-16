<script lang="ts">
  import { goto } from '@roxi/routify'
  import { _ } from 'svelte-i18n'
  import { customText, letters } from '../settings'

  const lettersPattern = '([^ ]{1,}( |$)){8}'
</script>

<main class="container">
  <form on:submit|preventDefault={$goto('/play')}>
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

<style>
  main.container {
    margin-top: 7.5rem;
    margin-bottom: 7.5rem;
  }

  small {
    font-weight: lighter;
  }
</style>
