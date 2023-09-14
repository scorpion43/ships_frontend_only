<template>
  <div 
    v-if="isReady"
    class="dn-board"
    :class="{blocked: blocked}">
    <template v-for="h in size.height">
      <div class="dn-board__row" :key="h">
        <template v-for="w in size.width">
          <dn-field
            :key="prepareCoordinates(w, h)"
            :field="getField(w - 1, h)"
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
import { FIELD_STATE } from "@/constants"
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
  computed: {
    isReady () {
      return this.ships.length > 0 && this.fields.length > 0
    }
  },
  data () {
    return {
      blocked: false
    }
  },
  watch: {
    fields: function (val) {
      console.log('fields changed', val)
    }
  },
  methods: {
    prepareCoordinates(w, h) {
      return `${alphabet[w-1]}${h}`
    },

    getField(x, y) {
      let field = this.fields.find(field => field.x === x && field.y === y)
      if (!field) {
        field = {
          x: x,
          y: y,
          state: FIELD_STATE.CLEAR
        }
      }
      return field
    },

    fieldClicked(field) {
      console.log(field)
      field.state = FIELD_STATE.CLICKED
      console.log(field)
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