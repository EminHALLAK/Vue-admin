<template>
  <nav class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/dashboard">Products store</a>

    <nav class="my-2 my-md-0 mb-md-0">
      <router-link to="/profile" class="p-2 text-white text-decoration-none" >{{ name }}</router-link>
      <router-link to="/login" class="p-2 text-white text-decoration-none" @click="logout">sign out</router-link>
    </nav>
  </nav>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue'
import axios from "axios";
import {useStore} from "vuex";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Nav",
  setup(){
    const name = ref('');
    const store = useStore();


    const user = computed(() => store.state.User.user);

    watch(user,()=> {
      name.value = user.value.first_name + ' ' + user.value.last_name;
    });

    const logout = async () => {
      await axios.post('logout')
    }

    return {
      name,
      logout,
    }
  }
})
</script>

