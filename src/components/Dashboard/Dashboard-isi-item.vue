<script setup>
import { Icon } from '@iconify/vue';
const myProps = defineProps({
  msg: {
    type: String,
    required: true
  },
  msg2: {
    type: String,
    required: true
  },
  icn: {
    type: String,
    required: true
  },
})
</script>

<script>
export default {
        components: {
                Icon,
        },
};

</script>

<template>
    <div class="border-2 border-zinc-700 bg-zinc-800 rounded-lg p-2 ">
        <div class="flow-root w-fit">
            <Icon v-bind:icon="icn" class="float-left w-12 h-12 border-2 border-zinc-700 bg-zinc-900 rounded-lg p-1" />
            <div class="grid grid-rows-2 pl-2">
                <h1 class="float-right text-sm sm:text-base font-bold">{{ msg}}</h1>
                <h1 class="float-right text-base">{{ msg2 }}</h1>
            </div>
        </div>
    </div>
</template>