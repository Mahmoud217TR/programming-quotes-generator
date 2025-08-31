<script setup>
  import SpecialButton from './components/SpecialButton.vue';
  import ToastNotification from './components/ToastNotification.vue';
  import emitter from './eventBus';
</script>

<template>
  <header class="pt-20 pb-10">
    <h1 class="text-center text-4xl">
      Programming Quotes
    </h1>
  </header>

  <main class="flex flex-col gap-12 my-20">
    <div class="w-4/5 lg:w-2/3 mx-auto">
      <p class="text-2xl md:text-4xl leading-12 md:leading-16 text-center w-full mb-10">
        {{ quote }}
      </p>
      <span class="block text-2xl md:text-3xl text-end ms-auto me-4">
        - {{ author }}
      </span>
    </div>
    <div class="flex justify-center items-center">
      <div class="flex gap-8 items-center justify-around">
        <SpecialButton type="button" title="Regenerate">
          <font-awesome-icon class="text-2xl group-hover:rotate-30 group-active:-rotate-90 transition duration-300" icon="fa-solid fa-dice" />
        </SpecialButton>
        <SpecialButton type="button" title="Copy" @click.prevent="copyPassword">
          <font-awesome-icon class="text-2xl group-hover:rotate-30 group-active:-rotate-90 transition duration-300" icon="fa-solid fa-copy" />
        </SpecialButton>
      </div>
    </div>
  </main>

  <footer class="my-10 px-4">
    <div class="container mx-auto">
      <hr class="opacity-25 mb-8">
      <p class="text-center text-2xl">
        Copyright © 2025 All Rights Reserved -
        <a href="https://github.com/Mahmoud217TR" target="__blank"
          class="hover:text-amber-500 transition-colors duration-300">
          MahmoudTR
        </a>
      </p>
    </div>
  </footer>
  <ToastNotification />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit aut, rem, dolorum reiciendis debitis ipsum eaque maxime, officia totam esse veritatis ducimus. Totam unde laudantium aspernatur obcaecati perspiciatis voluptatibus!",
      author: "Author",
    }
  },
  methods: {
    async copyPassword() {
      await navigator.clipboard.writeText(this.quote);
      emitter.emit("toast", "Copied to clipboard!");
    }
  },
}
</script>
