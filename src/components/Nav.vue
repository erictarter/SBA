<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { RouterLink, useRoute } from 'vue-router'
  import { useStore } from '../stores/app.ts'
  const props = defineProps<{
    sports: Array<{ icon: string; route: string }>
  }>()

  const store = useStore()
  const route = useRoute()

  const basketball = props.sports.filter((i) => i.icon === 'basketball')
  const football = props.sports.filter((i) => i.icon === 'football')
  const baseball = props.sports.filter((i) => i.icon === 'baseball')
  const soccer = props.sports.filter((i) => i.icon === 'futbol')
  const hockey = props.sports.filter((i) => i.icon === 'hockey-puck')
  const racing = props.sports.filter((i) => i.icon === 'flag-checkered')
  const mma = props.sports.filter((i) => i.icon === 'mitten')

  const isDropdownVisible = ref(false)

  const closeDropdown = () => {
    isDropdownVisible.value = false
  }
  const showDropdown = () => {
    isDropdownVisible.value = true
  }

  const showBusy = () => {
    store.showBusy()
  }

  watch(
    () => route.fullPath,
    () => {
      closeDropdown()
    }
  )
</script>
<template>
  <div>
    <nav>
      <div class="navbar border-solid border-b-2 border-secondary bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label
              @click="showDropdown"
              tabindex="0"
              class="btn btn-ghost btn-circle text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul
              v-show="isDropdownVisible"
              class="menu w-56 dropdown-content z-50 rounded-box bg-base-100 border-solid border-2 border-secondary">
              <li>
                <RouterLink class="" to="/">Home</RouterLink>
              </li>
              <li>
                <details>
                  <summary>Events</summary>
                  <ul>
                    <li>
                      <details>
                        <summary>
                          <font-awesome-icon
                            :icon="['fas', 'fa-football']" />Football
                        </summary>
                        <ul>
                          <li v-for="(i, index) in football" :key="index">
                            <RouterLink :to="'/events/' + i.route">
                              {{ i.league }}
                            </RouterLink>
                          </li>
                        </ul>
                      </details>
                      <details>
                        <summary>
                          <font-awesome-icon
                            :icon="['fas', 'fa-basketball']" />Basketball
                        </summary>
                        <ul>
                          <li v-for="(i, index) in basketball" :key="index">
                            <RouterLink :to="'/events/' + i.route">
                              {{ i.league }}
                            </RouterLink>
                          </li>
                        </ul>
                      </details>
                      <details>
                        <summary>
                          <font-awesome-icon
                            :icon="['fas', 'fa-futbol']" />Soccer
                        </summary>
                        <ul>
                          <li v-for="(i, index) in soccer" :key="index">
                            <RouterLink :to="'/events/' + i.route">
                              {{ i.league }}
                            </RouterLink>
                          </li>
                        </ul>
                      </details>
                      <details>
                        <summary>
                          <font-awesome-icon
                            :icon="['fas', 'fa-baseball']" />Baseball
                        </summary>
                        <ul>
                          <li v-for="(i, index) in baseball" :key="index">
                            <RouterLink :to="'/events/' + i.route">
                              {{ i.league }}
                            </RouterLink>
                          </li>
                        </ul>
                      </details>
                      <details>
                        <summary>
                          <font-awesome-icon
                            :icon="['fas', 'fa-flag-checkered']" />Racing
                        </summary>
                        <ul>
                          <li v-for="(i, index) in racing" :key="index">
                            <RouterLink :to="'/events/' + i.route">
                              {{ i.league }}
                            </RouterLink>
                          </li>
                        </ul>
                      </details>
                      <details>
                        <summary>
                          <font-awesome-icon
                            :icon="['fas', 'fa-hockey-puck']" />Hockey
                        </summary>
                        <ul>
                          <li v-for="(i, index) in hockey" :key="index">
                            <RouterLink :to="'/events/' + i.route">
                              {{ i.league }}
                            </RouterLink>
                          </li>
                        </ul>
                      </details>
                      <details>
                        <summary>
                          <font-awesome-icon
                            :icon="['fas', 'fa-basketball']" />MMA
                        </summary>
                        <ul>
                          <li v-for="(i, index) in mma" :key="index">
                            <RouterLink :to="'/events/' + i.route">
                              {{ i.league }}
                            </RouterLink>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <RouterLink class="" to="/settings">Settings</RouterLink>
              </li>
              <li>
                <RouterLink class="" to="/settings">Profile</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <RouterLink class="btn btn-ghost normal-case text-xl" to="/"
            >SBA</RouterLink
          >
        </div>
        <div class="navbar-end">
          <!-- show below if signed in.. -->

          <!-- <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <RouterLink to="/account">
            <button class="btn btn-ghost btn-circle text-lg">
              <div class="avatar placeholder">
                <div
                  class="bg-neutral-focus text-neutral-content rounded-full w-8">
                  <span class="text-lg">ET</span>
                </div>
              </div>
            </button>
          </RouterLink> -->
          <button
            @click="showBusy"
            class="btn btn-active btn-secondary login-btn text-base-content">
            Log in
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped lang="scss"></style>
