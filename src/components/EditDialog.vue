<template>
   <v-dialog v-model="openDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Edit - {{index}}</v-card-title>
        <v-text-field hide-details label="Task" color="purple darken-2" outlined v-model="newItemName">
        </v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeDialog">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="saveChanges">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['openDialog', 'itemToEdit', 'index'],
    data () {
      return {
        newItemName: ''
      }
    },
    methods: {
      closeDialog () {
        this.$emit('dialogClosed');
      },
      saveChanges () {
        this.$store.commit('editListItem', {index: this.index, name: this.newItemName});
        this.$emit('dialogClosed');
      }
    },
    mounted () {
      this.newItemName = this.itemToEdit.name;
    }
  }
</script>

<style lang="scss" scoped>

</style>