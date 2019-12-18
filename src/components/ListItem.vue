<template>
  <v-chip
    class="list-item ma-2 pl-4 pr-3"
    close
    color="teal"
    :outlined="!item.checked"
    :text-color="!item.checked ? 'teal' : 'white'"
    close-icon="mdi-delete"
    large
    @click="toggleCheck"
    @click:close="close"
  >
    <v-avatar left large>
      <v-icon v-if="item.checked">mdi-checkbox-marked-circle</v-icon>
      <v-icon v-else >mdi-calendar-multiple-check</v-icon>
    </v-avatar>
    <span class="title">{{item.name}}</span>
  </v-chip>
</template>

<script>
  export default {
    props: ['item', 'index'],
    methods: {
      close () {
        this.$store.commit('deleteItem', this.index);
      },
      toggleCheck () {
        this.$store.commit('toggleListItem', this.index);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .list-item {
    &:hover {
      cursor: pointer;
    }
  }
  .v-chip__close {
    color: yellow !important;
  }
</style>