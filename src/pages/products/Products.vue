<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="products/create" class="btn btn-sm btn-outline-secondary">Add product</router-link>
  </div>

  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">description</th>
        <th scope="col">Price</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product['id']">
        <td>{{product['id']}}</td>
        <td><img :src="product['image']" width="50" alt="a"></td>
        <td>{{product['title']}}</td>
        <td>{{product['description']}}</td>
        <td>{{product['price']}}</td>
        <td>
          <div class="btn-group">
            <router-link :to="`/products/${product['id']}/edit`"  class="btn btn-sm btn-outline-info" >Edit</router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger" @click="del(product['id'])">Delete</a>
          </div>
        </td>

      </tr>
      </tbody>
    </table>

  </div>

  <Paginator :last-page="lastPage" @page-changed="load($event)"/>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import axios from "axios";
import {Products} from "@/models/products";
import Paginator from "@/components/Paginator.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  components: {Paginator},
  setup(){

    const products = ref([]);
    const lastPage = ref(0);

    const load = async (page = 1) => {
      const {data} = await axios.get(`products?page=${page}`);
      products.value = data.data;
      console.log(products)
      lastPage.value = data.meta.last_page;
    }

    onMounted(load);
    const del = async (id: number) => {
      if(confirm('Are you sure?')){
        await axios.delete(`products/${id}`)
        products.value = products.value.filter((p: Products) => p.id !== id);
      }
    };


    return {
      products,
      del,
      lastPage,
      load,
    }
  },
})
</script>
