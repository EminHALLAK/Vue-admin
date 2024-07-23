<template>
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="prev">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
      </li>
    </ul>
  </nav>

</template>


<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Paginator',
  emits: ['page-changed'],
  props: {
    lastPage: {
      type: Number,
      required: true
    }
  },
  setup(props: { lastPage: number}, { emit }) {
    const page = ref(1);

    // Watch for changes to `page` and emit the `page-changed` event
    watch(page, (newPage) => {
      emit('page-changed', newPage);
    });

    const next = async () => {
      if (page.value < props.lastPage) {
        page.value++;
      }
    };

    const prev = async () => {
      if (page.value > 1) {
        page.value--;
      }
    };

    return {
      next,
      prev,
      page // expose the `page` ref if needed in the template
    };
  }
});
</script>

<!--<script lang="ts">-->
<!--import {defineComponent, ref, SetupContext, watch} from 'vue'-->

<!--export default defineComponent({-->
<!--  // eslint-disable-next-line vue/multi-word-component-names-->
<!--  name: "Paginator",-->
<!--  emits: ['page-changed'],-->
<!--  props: {-->
<!--    lastPage: {-->
<!--      type: Number,-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  setup (props: { lastPage: number} ,context: SetupContext){-->
<!--    const page = ref(1);-->


<!--    watch(page,() => {-->
<!--      context.emit('page-changed',page.value)-->

<!--    });-->


<!--    const next = async () => {-->
<!--      if(page.value < props.lastPage) {-->
<!--        page.value++;-->
<!--      }-->
<!--    };-->
<!--    const prev =  async ()  => {-->
<!--      if(page.value > 1) {-->
<!--        page.value&#45;&#45;;-->
<!--      }-->
<!--    }-->
<!--    return{-->
<!--      next,-->
<!--      prev,-->
<!--    }-->
<!--  }-->
<!--})-->
<!--</script>-->

