<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="users/create" class="btn btn-sm btn-outline-secondary">Add User</router-link>
  </div>

  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="user in users" :key="user['id']">
        <td>{{user['id']}}</td>
        <td>{{user['first_name']}} {{user['last_name']}}</td>
        <td>{{user['email']}}</td>
        <td >{{user['role']['name']}}</td>
        <td>
          <div class="btn-group">
            <router-link :to="`/users/${user['id']}/edit`"  class="btn btn-sm btn-outline-info" >Edit</router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger" @click="del(user['id'])">Delete</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <Paginator :last-page="lastPage" @page-changed="load"/>
</template>
<script lang="ts">
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {User} from "@/models/user";
import Paginator from "@/components/Paginator.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Users",

  components: {Paginator},
  setup() {

     const users = ref([]);
    const lastPage = ref(0);

    const load = async (page = 1) => {
      const {data} = await axios.get(`users?page=${page}`);
      users.value = data.data;
      lastPage.value = data.meta.last_page;
      console.log(lastPage)
    }

    onMounted(load);


    const del = async (id: number) =>{
       if(confirm('Are you sure?')){
         await axios.delete(`users/${id}`)
         users.value = users.value.filter((u: User) => u.id !== id);
       }
    }
    return {
      users,
      del,
      lastPage,
      load,

    };
  },
};
</script>


<style scoped>

</style>