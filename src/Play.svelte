<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { get } from 'svelte/store'
  import { letters, customText } from './settings'
  import { loremIpsum } from 'lorem-ipsum'

  const text = get(customText) || loremIpsum({ count: 1, units: 'paragraphs' })
  const Letters_groups = get(letters)
    .split(' ')
    .map((v) => v.toUpperCase() + v.toLowerCase())
    .map((v) => v.split(''))
  const columns_data = text.split('')

  let index = 0

  function clean(text: string) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  function keydown(e: KeyboardEvent & { currentTarget: EventTarget & Window }) {
    if (e.key == text[index]) {
      index += 1
      if (index === text.length) {
        game_over()
      }
    }
  }

  function game_over() {
    alert()
  }
</script>

<svelte:window on:keydown={keydown} />

<main>
  {#each Letters_groups as letters, i}
    <div class="letters-column">
      <div class="letters">
        {#each columns_data as letter, j}
          {#if j >= index}
            {#if letters.includes(letter) || letters.includes(clean(letter))}
              <div
                class="letter"
                class:blue-ncs={i === 0 || i === 7}
                class:cg-blue={i === 1 || i === 6}
                class:ming={i === 2 || i === 5}
                class:laurel-green={i === 3 || i === 4}
              >
                {letter}
              </div>
            {:else}
              <div class="space" />
            {/if}
          {/if}
        {/each}
      </div>
    </div>
  {/each}
</main>



<style lang="scss">
  // https://coolors.co/2589bd-187795-38686a-a3b4a2-cdc6ae
  $blue-ncs: #2589bdff;
  $cg-blue: #187795ff;
  $ming: #38686aff;
  $laurel-green: #a3b4a2ff;
  $bone: #cdc6aeff;
  $letter-height: 4rem;

  main {
    height: 100vh;
  }

  .letters-column {
    height: 100%;
    overflow-y: hidden;
    width: 10%;
    margin-left: 1.25%;
    margin-right: 1.25%;
    position: relative;
    display: inline-block;

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
        margin-top: 1rem;

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
        margin-top: 1rem;
      }
    }
  }
</style>
