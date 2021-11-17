import { register, init, getLocaleFromNavigator } from 'svelte-i18n'
import { version } from './settings'
import App from './App.svelte'

register('en', () => fetch('/dist/i18n/en.json').then(v => v.json()))
register('pt', () => fetch('/dist/i18n/pt.json').then(v => v.json()))

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
}).then(() => {
  const app = new App({ target: document.body })
  version.set(__SNOWPACK_ENV__.VERSION)

  if (import.meta.hot) {
    import.meta.hot.accept()
    import.meta.hot.dispose(() => app.$destroy())
  }

  if (__SNOWPACK_ENV__.NODE_ENV === 'production') {
    navigator.serviceWorker.register('/sw.js')
  }
})
