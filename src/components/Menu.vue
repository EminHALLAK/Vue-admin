<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Menu",

})
</script>

<template>
  <nav class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
    <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="sidebarMenuLabel">Products Store</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/dashboard" active-class="active" class="nav-link d-flex align-items-center gap-2 menu-links">
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" active-class="active" class="nav-link d-flex align-items-center gap-2 menu-links">
              Users
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/roles" active-class="active" class="nav-link d-flex align-items-center gap-2 menu-links">
              Roles
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" active-class="active" class="nav-link d-flex align-items-center gap-2 menu-links">
              Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orders" active-class="active" class="nav-link d-flex align-items-center gap-2 menu-links">
              Orders
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>
.active {
  color: aliceblue !important;
  background: linear-gradient(to right, #9a0202, #ff0000);
}
.nav-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-links {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
  margin: 3px;
  color: #676767;

}


.menu-links i {
  margin-right: 10px;
  font-size: 1.2em;
}
</style>