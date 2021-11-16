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

  small {
    font-weight: lighter;
  }

  // @media (prefers-color-scheme: dark) {
  //   html {
  //     filter: invert(100%);
  //   }
  // }

  .header {
    background-color: $color-tertiary;
    padding-top: 5rem;
    height: 100vh;

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
