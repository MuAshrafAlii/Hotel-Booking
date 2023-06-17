<template>
  <div class="rating">
    <span v-for="i in 5" :key="i">
      <i :class="i <= rating ? 'fa fa-star active' : 'fa fa-star'"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
