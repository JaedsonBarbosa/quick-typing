import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'
import App from './App.svelte'

import en from './i18n/en.json'
import pt from './i18n/pt.json'

addMessages('en', en)
addMessages('pt', pt)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})

const app = new App({ target: document.body })

if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => app.$destroy())
}

if (__SNOWPACK_ENV__.NODE_ENV === 'production') {
  navigator.serviceWorker.register('/sw.js')
}
