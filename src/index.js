import { register, init, getLocaleFromNavigator } from 'svelte-i18n'
import App from './App.svelte'

register('en', () => import('./i18n/en.json'))
register('pt', () => import('./i18n/pt.json'))

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
}).then(() => {
  const app = new App({ target: document.body })

  if (import.meta.hot) {
    import.meta.hot.accept()
    import.meta.hot.dispose(() => app.$destroy())
  }

  if (__SNOWPACK_ENV__.NODE_ENV === 'production') {
    navigator.serviceWorker.register('/sw.js')
  }
})
