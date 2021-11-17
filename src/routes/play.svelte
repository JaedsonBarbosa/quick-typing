<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { get } from 'svelte/store'
  import { letters, customText, statistics } from '../settings'
  import { loremIpsum } from 'lorem-ipsum'
  import { goto } from '@roxi/routify'
  import { cubicInOut } from 'svelte/easing'
  import { flip } from 'svelte/animate'
  import { slide } from 'svelte/transition'
  import { onMount } from 'svelte'

  function generateText() {
    return loremIpsum({ count: 2, units: 'sentence' })
  }

  function includes(letters: string, letter: string) {
    if (!letter) return false
    const clean = letter.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return letters.includes(letter) || letters.includes(clean)
  }

  const Letters_groups = get(letters)
    .split(' ')
    .map((v) => v.toUpperCase() + v.toLowerCase())

  function isValidLetter(letter: string) {
    return letter === ' ' || Letters_groups.some((k) => includes(k, letter))
  }

  const text = (get(customText) || generateText())
    .split('')
    .filter((v) => isValidLetter(v))

  let start: number
  let index = 0
  let errors = 0

  function keydown(
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) {
    const target = e.target as HTMLInputElement
    const newText = target.value
    if (newText[index] == text[index]) {
      index += 1
      if (!start) start = new Date().valueOf()
      if (index === text.length) finish()
    } else if (isValidLetter(newText[index])) {
      errors++
      target.value = text.slice(0, index).join('')
    } else if (newText.length < index) {
      target.value = text.slice(0, index).join('')
    }
  }

  function finish() {
    const end = new Date().valueOf()
    const duration = Math.floor((end - start) / 1000)
    $statistics = { duration, errors, length: text.length }
    $goto('/result')
  }

  const _colors = ['blue-ncs', 'cg-blue', 'ming', 'laurel-green']
  const colors = _colors.concat(_colors.slice().reverse())
  $: rendered_text = text
    .slice(index, index + 8)
    .map((v, i) => ({ v, i: i + index }))

  let input: HTMLInputElement
  onMount(() => input.focus())
</script>

<main class="container">
  <section class="letters-section">
    {#each Letters_groups as letters, i}
      <div class="letters-column {colors[i]}">
        <div class="letters">
          {#each rendered_text as letter (letter.i)}
            <div
              transition:slide
              animate:flip={{ duration: 200, easing: cubicInOut }}
              class={includes(letters, letter.v)
                ? `letter ${colors[i]}`
                : 'space'}
            >
              {letter.v}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>
  <section>
    <input bind:this={input} on:input={keydown} />
  </section>
</main>

<style lang="scss">
  // https://coolors.co/2589bd-187795-38686a-a3b4a2-cdc6ae
  $blue-ncs: #2589bdff;
  $cg-blue: #187795ff;
  $ming: #38686aff;
  $laurel-green: #a3b4a2ff;
  $bone: #cdc6aeff;
  $letter-height: 6rem;
  $letter-gap: $letter-height * 0.5;
  $column-opacity: 0.4;

  main {
    height: 100vh;
  }

  .letters-section {
    height: calc(100% - 5.3rem);
  }

  .letters-column {
    height: 100%;
    overflow-y: hidden;
    width: 12.5%;
    position: relative;
    display: inline-block;

    &.blue-ncs {
      background-color: rgba($blue-ncs, $column-opacity);
    }

    &.cg-blue {
      background-color: rgba($cg-blue, $column-opacity);
    }

    &.ming {
      background-color: rgba($ming, $column-opacity);
    }

    &.laurel-green {
      background-color: rgba($laurel-green, $column-opacity);
    }

    .letters {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: column-reverse;
      text-align: center;

      .letter {
        font-size: $letter-height * 0.5;
        line-height: $letter-height;
        font-weight: bold;
        color: black;
        height: $letter-height;
        border-radius: $letter-height * 0.5;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        margin-bottom: $letter-gap;

        &.blue-ncs {
          background-color: $blue-ncs;
        }

        &.cg-blue {
          background-color: $cg-blue;
        }

        &.ming {
          background-color: $ming;
        }

        &.laurel-green {
          background-color: $laurel-green;
        }
      }

      .space {
        height: $letter-height;
        margin-bottom: $letter-gap;
        visibility: hidden;
      }
    }
  }
</style>
