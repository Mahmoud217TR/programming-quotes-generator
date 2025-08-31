<template>
  <teleport to="#screen-overlays">
      <transition name="fade">
      <div v-if="visible" class="fixed top-5 end-5 font-semibold text-lg text-amber-100 px-4 py-2 rounded-md flex gap-4 items-center ring-2
      ring-amber-500 outline-none transition shadow-2xl border-4 border-gray-900 shadow-amber-500" >
        {{ message }}
      </div>
    </transition>
  </teleport>
</template>

<script>
import emitter from '../eventBus';

export default {
  name: "ToastNotification",
  data() {
    return {
      message: "",
      visible: false,
      timeoutId: null
    }
  },
  mounted() {
    emitter.on("toast", this.showToast)
  },
  beforeUnmount() {
    emitter.off("toast", this.showToast)
  },
  methods: {
    showToast(msg) {
      this.message = msg;
      this.visible = true;
      clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => {
        this.visible = false;
      }, 3000)
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
