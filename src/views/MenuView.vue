<script setup>
import Tombol_menu from '../components/Dashboard/Menu.vue'
import { Icon } from '@iconify/vue';
</script>

<script>
export default {
  name:'menus',
    data() {
      return {
        form: { 
          menu:"0",
          m:"",
        },
      }
    },
    methods: {
      Tampil_menu() {
        this.form.menu="1";
        this.form.m="1";
      },
      Sembunyi_menu() {
        this.form.menu="0";
      },
      dashboard() {
        this.$router.push('dashboard')
      },
      penjualan() {
        this.$router.push('penjualan')
      },
      pembelian() {
        this.$router.push('pembelian')
      },
      retur() {
        this.$router.push('retur')
      },
      laporan() {
        this.$router.push('laporan')
      },
      barang() {
        this.$router.push('barang')
      },
      profile() {
        this.$router.push('profile')
      },
    },
  components: {
    Icon,
  },
};
</script>

<template>
    <!-- Header -->

    <div class="z-50 flow-root bg-zinc-800 w-full p-4 text-lg font-bold fixed max-w-[1280px]">
      <button v-if="(this.form.menu=='0')" v-on:click="Tampil_menu()" class="float-left grid grid-cols-2 w-fit text-zinc-300 hover:text-white">
        <Icon icon="ep:menu" class="w-8 h-8"/>
        <h1 class="pt-1">Menu</h1>
      </button>
      <button v-if="(this.form.menu=='1')" v-on:click="Sembunyi_menu()" class="float-left grid grid-cols-2 w-fit text-zinc-300 hover:text-white">
        <Icon icon="ep:menu" class="w-8 h-8"/>
        <h1 class="pt-1">Menu</h1>
      </button>
      <button v-on:click="Logout()" class="float-right grid grid-cols-[auto_minmax(auto,auto)] gap-2 w-fit text-zinc-300 hover:text-white">
        <h1 class="pt-1">Logout</h1>
        <Icon icon="tabler:logout" class="w-8 h-8"/>
      </button>
    </div>

    <!-- End Header -->

    <!-- Show Menu -->
    <div v-if="(this.form.menu=='1')" class="block sm:hidden">
      <div class="fixed pt-16">
        <div class="p-4 font-bold grid grid-rows-6 gap-2 text-zinc-300 bg-zinc-700 w-screen">
          <Tombol_menu class="border-2 border-zinc-800" v-on:click="dashboard()" msg="Dashboard" icn="material-symbols:monitor-outline"/>
          <Tombol_menu class="border-2 border-zinc-800" v-on:click="penjualan()" msg="Penjualan" icn="ep:sell"/>
          <Tombol_menu class="border-2 border-zinc-800" v-on:click="pembelian()" msg="Pembelian" icn="icons8:buy"/>
          <Tombol_menu class="border-2 border-zinc-800" v-on:click="retur()" msg="Retur" icn="tabler:truck-return"/>
          <Tombol_menu class="border-2 border-zinc-800" v-on:click="laporan()" msg="Laporan" icn="mdi:report-line"/>
          <Tombol_menu class="border-2 border-zinc-800" v-on:click="barang()" msg="Barang" icn="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products"/>
          <Tombol_menu class="border-2 border-zinc-800" v-on:click="profile()" msg="Profile" icn="gg:profile"/>
        </div>
      </div>
    </div>
    <div v-if="(this.form.menu=='1')" class="hidden sm:block">
      <div class="fixed z-20 h-screen w-auto p-4 pr-0 bg-zinc-800 top-16">
        <div class="grid grid-rows-6 gap-2 text-zinc-300">
          <Tombol_menu v-on:click="dashboard()" msg="" icn="material-symbols:monitor-outline"/>
          <Tombol_menu v-on:click="penjualan()" msg=""  icn="ep:sell"/>
          <Tombol_menu v-on:click="pembelian()" msg=""  icn="icons8:buy"/>
          <Tombol_menu v-on:click="retur()" msg=""  icn="tabler:truck-return"/>
          <Tombol_menu v-on:click="laporan()" msg=""  icn="mdi:report-line"/>
          <Tombol_menu v-on:click="barang()" msg=""  icn="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products"/>
          <Tombol_menu v-on:click="profile()" msg=""  icn="gg:profile"/>
        </div>
      </div>
    </div>
    <div v-if="(this.form.menu=='0')" class="hidden sm:block">
      <div class="fixed z-20 h-screen w-auto p-4 bg-zinc-800 top-16">
        <div class="grid grid-rows-6 gap-2 text-zinc-300">
          <Tombol_menu v-on:click="dashboard()" msg="Dashboard" icn="material-symbols:monitor-outline"/>
          <Tombol_menu v-on:click="penjualan()" msg="Penjualan" icn="ep:sell"/>
          <Tombol_menu v-on:click="pembelian()" msg="Pembelian" icn="icons8:buy"/>
          <Tombol_menu v-on:click="retur()" msg="Retur" icn="tabler:truck-return"/>
          <Tombol_menu v-on:click="laporan()" msg="Laporan" icn="mdi:report-line"/>
          <Tombol_menu v-on:click="barang()" msg="Barang" icn="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products"/>
          <Tombol_menu v-on:click="profile()" msg="Profile" icn="gg:profile"/>
        </div>
      </div>
    </div>
    <!-- End Show Menu -->

</template>
