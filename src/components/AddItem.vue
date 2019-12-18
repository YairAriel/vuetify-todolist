<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md8 class="mb-2">
        <v-text-field hide-details label="Add Item" color="purple darken-2" outlined v-model="newItem"></v-text-field>
      </v-flex>
      <v-flex xs12 md3 offset-md1>
        <v-btn 
          x-large 
          block 
          color="purple darken-2" 
          dark 
          @click="addItem" 
          :disabled="newItem === ''">
            Add
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        newItem: ''
      }
    },
    methods: {
      addItem () {
        this.$store.commit('itemAdded', {
          name: this.newItem,
          checked: false
        });
        this.newItem = '';
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>