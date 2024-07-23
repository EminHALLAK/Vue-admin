<template >
  <main class="form-signin col-2 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please Register</h1>

      <input v-model="firstName" class="form-control mb-3 " placeholder="First Name" required>

      <input v-model="lastName" class="form-control mb-3 " placeholder="Last Name" required>
      <input v-model="email" type="email" class="form-control mb-3" placeholder="Email" required>

      <input v-model="password" type="password" class="form-control mb-3"  placeholder="Password" required>
      <input v-model="passwordConfirm" type="password" class="form-control mb-3"  placeholder="Password Confirm" required>


      <button class="btn btn-bd-primary w-100 py-2  " type="submit">Register</button>
    </form>
  </main>
</template>


<script lang="ts">
import {defineComponent, ref} from 'vue'
import axios from 'axios'
import {useRouter} from "vue-router";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  setup(){
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    const router = useRouter();

    const submit = async() => {
      await axios.post('register', {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        password_confirm: passwordConfirm.value,
      });
      await router.push('/login');
    }




    return{
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      submit
    }
  },

})
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #f92c2c;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #e02828;
  --bs-btn-hover-border-color: #e02828;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #c82323;
  --bs-btn-active-border-color: #c82323;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}
</style>

