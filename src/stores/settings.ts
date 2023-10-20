import { defineStore } from 'pinia'

export const useSettings = defineStore('myStore', {
  state: () => ({
    isToggled: false
  }),
  actions: {
    toggleToggler() {
      this.isToggled = !this.isToggled
    }
  }
})
