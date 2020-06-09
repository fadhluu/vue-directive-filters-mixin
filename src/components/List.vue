<template>
  <div>
    <h1>List Component</h1>
    <div class="form-group">
      <input v-model="filterText" class="form-control" />
    </div>
    <ul class="list-group">
      <li v-for="car in filteteredCars" class="list-group-item">
        {{ car }}
      </li>
    </ul>
  </div>
</template>

<script>
import { carMixin } from '../carMixin';

export default {
  mixins: [carMixin],
};
</script>

<style></style>
