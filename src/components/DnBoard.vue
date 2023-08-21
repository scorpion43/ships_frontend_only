<template>
  <div class="dn-board">
    <template v-for="h in size.height">
      <div class="dn-board__row" :key="h">
        <template v-for="w in size.width">
          <dn-field
            :key="prepareCordinates(w, h)"
            :cordinates="prepareCordinates(w, h)"
          />
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import { alphabet } from "@/constants"
import DnField from './DnField.vue'
export default {
  name: "DnBoard",
  props: {
    size: {
      type: Object,
      default: () => ({
        width: 10,
        height: 10
      })
    }
  },
  components: {
    DnField
  },
  methods: {
    prepareCordinates(w, h) {
      console.log(`${alphabet[w-1]}${h}`)
      return `${alphabet[w-1]}${h}`
    }
  },
}
</script>
<style lang="scss">
  .dn-board {
    border: 1px solid black;
    margin: 0 auto;
    width: fit-content;
    &__row {
      display: flex;
    }
  }
</style>