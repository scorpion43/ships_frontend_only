<template>
  <div class="dn-field"
    :class="cssClasses"
    @click="click">
    {{ JSON.stringify(field) }}
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
    field: {
      type: Object,
      required: false,
    }
  },
  computed: {
    cssClasses () {
      if (this.justClicked) {
        return "just-clicked"
      }
      return this.field.state.toLowerCase()
    }
  },
  data() {
    return {
      justClicked: false,
      state: false
    }
  },
  methods: {
    click () {
      this.justClicked = true
      this.$emit('clicked', this.field)
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
      background: black;
    }
    &.clicked {
      background: green;
    }
    &.hit {
      background: yellow;
    }
    &.sunk {
      background: red;
    }
  }
</style>