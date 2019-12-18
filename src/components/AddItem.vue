<template>
  <div>
    <v-row>
      <v-col cols="8">
        <v-text-field label="Add Item" outlined v-model="newItem"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn x-large @click="addItem" :disabled="newItem === ''">Add</v-btn>
      </v-col>
    </v-row>
  </div>
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