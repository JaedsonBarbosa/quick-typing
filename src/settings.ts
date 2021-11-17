import { writable } from "svelte/store";

export const version = writable('')

const fallbackLetters = 'qaz wsx edc rfvtgb yhnujm ik ol p'
const _letters = localStorage.getItem('letters') || fallbackLetters
export const letters = writable(_letters)
letters.subscribe(v => localStorage.setItem('letters', v))

export const customText = writable('')

export const statistics = writable<Statistics>(undefined)

interface Statistics {
  duration: number
  length: number
  errors: number
}
