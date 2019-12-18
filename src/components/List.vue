<template>
  <div>
    <ListItem v-for="(listItem, index) in listOfItems" :key="index" :item="listItem" :index="index"/>
  </div>
</template>

<script>
  import ListItem from './ListItem';

  export default {
    computed: {
      listOfItems () {
        return this.$store.getters.list
      }
    },
    components: {
      ListItem
    }
  }
</script>

<style lang="scss" scoped>

</style>