<template>
  <div class="hello">
    <dn-board :ships="getShips" :fields="getFields" :size="{ width: $options.boardSize, height: $options.boardSize}"/>
  </div>
</template>

<script>
import DnBoard from './DnBoard.vue'
import { mapActions, mapGetters } from 'vuex';

const boardSize = 10

export default {
  name: 'HelloWorld',
  boardSize: 10,
  components: {
    DnBoard
  },
  computed: {
    ...mapGetters([
      'getShips',
      'getFields'
    ])
  },
  methods: {
    ...mapActions(['generateShips'])
  },
  mounted () {
    this.generateShips(boardSize)
  }
}
</script>
