<template>
  <div class="home">
    <main>
      <HomePage/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue';

export default {
  name: 'home',
  components: {
    HomePage,
  },
};
</script>
