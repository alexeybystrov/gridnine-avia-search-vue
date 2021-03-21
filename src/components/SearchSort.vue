<template>
  <section class="mb-3" @change="handleChange">
    <div id="radio-group" class="font-weight-bold">Сортировать</div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" name="picked" value="ascendingPrice" class="form-check-input" />
        - по возрастанию цены
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" name="picked" value="descendingPrice" class="form-check-input" />
        - по убыванию цены
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" name="picked" value="ascendingTime" class="form-check-input" />
        - по времени в пути
      </label>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: 'SearchSort',
  methods: {
    ...mapMutations(['sortBy']),
    handleChange(e) {
      this.sortBy(e.target.value);
    }
  }
}
</script>