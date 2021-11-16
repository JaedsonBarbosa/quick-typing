export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-svelte'],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
  env: {
    VERSION: process.env.npm_package_version,
  }
}
