<script setup>
import Tombol_menu from '../components/Dashboard/Menu.vue'
import { Icon } from '@iconify/vue';
</script>

<script>
export default {
    data() {
      return {
        form: { 
          menu:"0",
        },
      }
    },
    methods: {
      Tampil_menu() {
        this.form.menu="1";
      },
      Sembunyi_menu() {
        this.form.menu="0";
      },
    },
  components: {
    Icon,
  },
};
</script>

<template>
    <!-- Header -->
    <div class="z-50 flow-root bg-zinc-800 w-full p-4 text-lg font-bold">
      <button v-if="(this.form.menu=='0')" v-on:click="Tampil_menu()" class="float-left grid grid-cols-2 w-fit text-zinc-300 hover:text-white">
        <Icon icon="ep:menu" class="w-8 h-8"/>
        <h1 class="pt-1">Menu</h1>
      </button>
      <button v-if="(this.form.menu=='1')" v-on:click="Sembunyi_menu()" class="float-left grid grid-cols-2 w-fit text-zinc-300 hover:text-white">
        <Icon icon="ep:menu" class="w-8 h-8"/>
        <h1 class="pt-1">Menu</h1>
      </button>
      <button v-on:click="Logout()" class="float-right grid grid-cols-2 gap-2 w-fit text-zinc-300 hover:text-white">
        <h1 class="pt-1">Logout</h1>
        <Icon icon="tabler:logout" class="w-8 h-8"/>
      </button>
    </div>
    
    <!-- End Header -->

    <!-- Show Menu -->
    <div v-if="(this.form.menu=='1')">
      <div class="fixed z-20 h-screen w-auto p-4 pr-0 bg-zinc-800 top-12">
        <div class="grid grid-rows-6 gap-2 text-zinc-300">
          <Tombol_menu icn="material-symbols:monitor-outline"/>
          <Tombol_menu icn="ep:sell"/>
          <Tombol_menu icn="icons8:buy"/>
          <Tombol_menu icn="tabler:truck-return"/>
          <Tombol_menu icn="mdi:report-line"/>
          <Tombol_menu icn="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products"/>
          <Tombol_menu icn="gg:profile"/>
        </div>
      </div>
    </div>
    <div v-if="(this.form.menu=='0')">
      <div class="fixed z-20 h-screen w-auto p-4 bg-zinc-800 top-12">
        <div class="grid grid-rows-6 gap-2 text-zinc-300">
          <Tombol_menu msg="Dashboard" icn="material-symbols:monitor-outline"/>
          <Tombol_menu msg="Penjualan" icn="ep:sell"/>
          <Tombol_menu msg="Pembelian" icn="icons8:buy"/>
          <Tombol_menu msg="Retur" icn="tabler:truck-return"/>
          <Tombol_menu msg="Laporan" icn="mdi:report-line"/>
          <Tombol_menu msg="Barang" icn="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products"/>
          <Tombol_menu msg="Profile" icn="gg:profile"/>
        </div>
      </div>
    </div>
    <!-- End Show Menu -->

</template>
