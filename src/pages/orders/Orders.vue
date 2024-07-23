<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" @click="exportCSV">Export</a>
  </div>

  <div class="table-responsive small">
    <table class="table  table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Total</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="order in orders" :key="order.id">
        <tr>
          <td>{{order.id}}</td>
          <td>{{order.name}}</td>
          <td>{{order.email}}</td>
          <td>{{order.total}}</td>
          <td>
            <div class="btn-group">
              <a href="javascript:void(0)" class="btn btn-sm btn-outline-info" @click="select(order.id)">View</a>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <div class="overflow-hidden"  :class="{ 'items': selected === order.id, 'items_h': selected !== order.id }">
              <table class="table  table-sm">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in order.order_items" :key="item.id">
                  <td>{{item.id}}</td>
                  <td>{{item.product_title}}</td>
                  <td>{{item.quantity}}</td>
                  <td>{{item.price}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </template>

      </tbody>
    </table>

  </div>
  <Paginator :last-page="lastPage" @page-changed="load($event)"/>

</template>



<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import axios from "axios";
import Paginator from "@/components/Paginator.vue";
interface OrderItem {
  id: number;
  product_title: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  name: string;
  email: string;
  total: number;
  order_items: OrderItem[];
}
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Orders",
  components: {Paginator},
  setup(){
    const orders = ref<Order[]>([]);
    const lastPage = ref(0);
    const selected = ref<number | null>(null);

    const load = async (page = 0)=> {
      const {data} = await axios.get(`orders?page=${page}`);

      orders.value = data.data;
      lastPage.value = data.meta.last_page;
      console.log(lastPage.value)
    }

    onMounted(load);


    const select = (id: number) => selected.value = selected.value !== id ? id: null;

    const exportCSV = async () => {
      const {data} = await axios.post('export',{},{responseType: 'blob'});
      const blob = new Blob([data],{type: 'text/csv'});
      console.log(blob)
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(data);
      link.download = 'order.csv';
      link.click();
    }

    return{
      orders,
      lastPage,
      selected,
      load,
      select,
      exportCSV,

    };

  },
})
</script>

<style scoped>
.items {
  max-height: 150px;
  transition: max-height 0.5s ease-in-out;
}

.items_h {
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
}
</style>

