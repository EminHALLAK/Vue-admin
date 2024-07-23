<template>
  <h2>Daily Sales</h2>

  <div id="chart">

  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import  * as c3 from 'c3'
import 'c3/c3.css';
import axios from "axios";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  setup(){
    onMounted(async () => {
      const chart = c3.generate({
        bindto: '#chart',
        data: {
          x: 'x',
          columns: [
              ['x'],
              ['Sales'],
          ],
          type: 'area-spline',
          colors: {
            Sales: '#dc2424' ,

            // Set the color for the Sales bar
          }
        },

        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%d-%m-%Y'
            }
          }
        }
      });

      const {data} = await axios.get('chart');
      chart.load({
        columns: [
          // eslint-disable-next-line
          ['x', ...data.map((r: any) => r.date)],
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ['Sales', ...data.map((r: any) => r.sum)],
        ]
      })
      chart.internal.main.selectAll('.c3-line-Sales').classed('c3-spline-Sales', true);

    });

  },
})
</script>

<style>
.c3-spline-Sales {
  stroke-width: 2.5px;
}
</style>

