<template>
  <button class="group aspect-square font-semibold hover:bg-amber-400 active:bg-amber-400 text-amber-100 p-4 rounded-full flex gap-4 items-center ring-2
    ring-amber-500 outline-none hover:scale-105 transition shadow-2xl border-4 border-gray-900 shadow-amber-500
      active:scale-95 cursor-pointer">
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SpecialButton",
}
</script>
