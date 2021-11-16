<script>
  import { Router } from '@roxi/routify'
  import routes from '../.routify/routes.default.js'
  import { _ } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$_('title')}</title>
</svelte:head>

<Router {routes} />

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
</style>
