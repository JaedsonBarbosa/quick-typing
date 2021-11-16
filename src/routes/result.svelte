<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { statistics } from '../settings'

  function calcPrecision(rights: number, wrongs: number) {
    const total = rights + wrongs
    const precision = (1 - wrongs / total) * 100
    return precision.toFixed(2) + '%'
  }

  function calcSpeed(length: number, duration: number) {
    const speed = (length * 60) / duration
    return speed.toFixed(2)
  }
</script>

<main class="container">
  <div class="row">
    <div class="column">
      <p>
        <small>{$_('duration')}</small>
        <br />
        {$statistics.duration}
        {$_('time-unit')}
      </p>
    </div>
    <div class="column">
      <p>
        <small>{$_('characters')}</small>
        <br />
        {$statistics.length}
      </p>
    </div>
    <div class="column">
      <p>
        <small>{$_('speed')}</small>
        <br />
        {calcSpeed($statistics.length, $statistics.duration)}
        <abbr title={$_('speed-unit')}>{$_('short-speed-unit')}</abbr>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <p>
        <small>{$_('total')}</small>
        <br />
        {$statistics.errors + $statistics.length}
      </p>
    </div>
    <div class="column">
      <p>
        <small>{$_('errors')}</small>
        <br />
        {$statistics.errors}
      </p>
    </div>
    <div class="column">
      <p>
        <small>{$_('precision')}</small>
        <br />
        {calcPrecision($statistics.length, $statistics.errors)}
      </p>
    </div>
  </div>
  <a class="button" href="/">{$_('back')}</a>
</main>

<style>
  main.container {
    margin-top: 7.5rem;
    margin-bottom: 7.5rem;
  }
</style>
