<template>
  <div class="dn-board"
    :class="{blocked: blocked}">
    <template v-for="h in size.height">
      <div class="dn-board__row" :key="h">
        <template v-for="w in size.width">
          <dn-field
            :key="prepareCordinates(w, h)"
            :coordinates="{x: w - 1, y: h}"
            @clicked="fieldClicked"
          />
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import { alphabet, FIELD_BLOCK_TIME } from "@/constants"
import DnField from './DnField.vue'
export default {
  name: "DnBoard",
  components: {
    DnField
  },
  props: {
    size: {
      type: Object,
      default: () => ({
        width: 10,
        height: 10
      })
    },
    ships: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      blocked: false
    }
  },
  methods: {
    prepareCordinates(w, h) {
      return `${alphabet[w-1]}${h}`
    },

    getField(x, y) {
      return this.fields.find(field => field.x === x && field.y === y)
    },

    fieldClicked() {
      this.blocked = true
      setTimeout(() => {
        this.blocked = false
      }, FIELD_BLOCK_TIME)
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
    &.blocked {
      pointer-events: none;
    }
  }
</style>