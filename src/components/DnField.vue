<template>
  <div class="dn-field"
    :class="{'just-clicked': justClicked}"
    @click="click">
    <!-- {{ cordinates }} -->
  </div>
</template>
<script>
export default {
  name: "DnField",
  props: {
    cordinates: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      justClicked: false,
    }
  },
  methods: {
    click () {
      this.justClicked = true
      this.$emit('click', this.cordinates)
      setTimeout(() => {
        this.justClicked = false
      }, 800)
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