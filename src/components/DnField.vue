<template>
  <div class="dn-field"
    :class="{'just-clicked': justClicked}"
    @click="click">
    <!-- {{ JSON.stringify(coordinates) }} -->
  </div>
</template>
<script>
import  { FIELD_BLOCK_TIME } from '@/constants'
export default {
  name: "DnField",
  props: {
    coordinates: {
      type: Object,
      required: true,
    },
    ships: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      justClicked: false,
      missed: false,
      hit: false,
      sunk: false
    }
  },
  methods: {
    click () {
      this.justClicked = true
      this.$emit('clicked', this.coordinates)
      setTimeout(() => {
        this.justClicked = false
      }, FIELD_BLOCK_TIME)
    }
  }
}
</script>
<style scoped lang="scss">
  .dn-field {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    &.just-clicked {
      background: yellow;
    }
  }
</style>