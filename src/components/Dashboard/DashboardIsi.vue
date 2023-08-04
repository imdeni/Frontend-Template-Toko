<script setup>
import { Icon } from '@iconify/vue';
import Dashboard_item  from './Dashboard-isi-item.vue' 
</script>

<script>
export default {
        components: {
                Icon,
        },
};
</script>



<template>
        <div class="pl-4 sm:pl-44 pt-20 pr-4">
                <div class="grid grid-cols-[40px_minmax(auto,auto)]">
                        <Icon icon="material-symbols:monitor-outline" class="w-8 h-8 bg-zinc-700 rounded-lg p-1" />
                        <h1 class="rounded-lg bg-zinc-700 w-fit pr-2 pl-2 pt-1 pb-1 font-bold text-base text-zinc-300">Dashboard
                        </h1>
                </div>
        </div>
        <div class="pl-4 sm:pl-44 pt-2 pr-4 pb-4 text-justify">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <Dashboard_item msg="Penjualan" msg2="1.700.000" icn="ep:sell"/>
                        <Dashboard_item msg="Pembelian" msg2="1.000.000" icn="icons8:buy"/>
                        <Dashboard_item msg="Margin Penjualan" msg2="700.000" icn="map:accounting"/>
                        <Dashboard_item msg="Stok" msg2="5678 Item" icn="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products"/>
                        
                </div>
        </div>
</template>