<template>
  <v-chip
    class="list-item ma-2 pl-4 pr-3"
    close
    color="teal"
    :outlined="!item.checked"
    :text-color="!item.checked ? 'teal' : 'white'"
    close-icon="mdi-delete"
    large
    
    @click:close="close"
  >
    <v-avatar left large>
      <v-icon v-if="item.checked">mdi-checkbox-marked-circle</v-icon>
      <v-icon v-else>mdi-calendar-multiple-check</v-icon>
    </v-avatar>
    <span class="title" @click="toggleCheck">{{item.name}}</span>
    <span class="ml-5">
      <v-icon @click="editItem">mdi-pencil</v-icon>
    </span>
    <EditDialog :openDialog="isEdited" :itemToEdit="item" :index="index" @dialogClosed="isEdited = false" />
  </v-chip>
</template>

<script>
  import EditDialog from './EditDialog';

  export default {
    props: ['item', 'index'],
    data () {
      return {
        isEdited: false
      }
    },
    methods: {
      close () {
        this.$store.commit('deleteItem', this.index);
      },
      toggleCheck () {
        this.$store.commit('toggleListItem', this.index);
      },
      editItem () {
        this.isEdited = true
      }
    },
    components: {
      EditDialog
    }
  }
</script>

<style lang="scss" scoped>
  .list-item {
    &:hover {
      cursor: pointer;
    }
  }
</style>