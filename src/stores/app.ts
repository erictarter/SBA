import { defineStore } from 'pinia'

export const useStore = defineStore('myStore', {
  state: () => ({
    isToggled: false,
    busy: false
  }),
  actions: {
    toggleToggler() {
      this.isToggled = !this.isToggled
    },
    showBusy() {
      this.busy = true
      setTimeout(() => {
        this.busy = false
      }, 1450)
    }
  }
})
