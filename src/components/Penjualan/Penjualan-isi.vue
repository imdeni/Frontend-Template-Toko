<script setup>
import { Icon } from '@iconify/vue';
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
            <Icon icon="ep:sell" class="w-8 h-8 bg-zinc-700 rounded-lg p-1" />
            <h1 class="rounded-lg bg-zinc-700 w-fit pr-2 pl-2 pt-1 pb-1 font-bold text-base text-zinc-300">Penjualan
            </h1>
        </div>
    </div>
    <div class="pl-4 sm:pl-44 pt-2 pr-4 pb-4 text-justify">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-2">
            <div class="bg-zinc-700 w-full rounded-md p-2">
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="pl-2">Song</th>
                            <th class="pl-2">Artist</th>
                            <th class="pl-2">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pl-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td class="pl-2">Malcolm Lockyer</td>
                            <td class="pl-2">1961</td>
                        </tr>
                        <tr>
                            <td class="pl-2">Witchy Woman</td>
                            <td class="pl-2">The Eagles</td>
                            <td class="pl-2">1972</td>
                        </tr>
                        <tr>
                            <td class="pl-2">Shining Star</td>
                            <td class="pl-2">Earth, Wind, and Fire</td>
                            <td class="pl-2">1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>