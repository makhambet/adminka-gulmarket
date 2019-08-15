<template>
  <div id="app">
    <div class="app">
      <app-menu></app-menu>
        <div class="app-block2">
          <app-header></app-header>
          <div class="app-block2-pt">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- <div v-if="!isAuthentificated" class="signin">
      <app-signin></app-signin>
    </div> -->
  </div>
</template>



<script>
  import AppMenu from '@/components/AppMenu.vue'
  import AppHeader from '@/components/AppHeader.vue'
  import AppSignin from './views/Signin'
  export default {
    data() {
      return {
        isAuthentificated: true
      }
    },
    created () {
      this.isAuthentificated = this.$store.getters.isAuthentificated;
    },
    components: {
      AppHeader,
      AppMenu,
      AppSignin
    },
  }
</script>