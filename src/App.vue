<template>
  <v-app>
    <v-container>
      <v-card :class="{'pa-4': $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.smAndDown}">
        <AddItem />
        <List />
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import AddItem from './components/AddItem';
import List from './components/List';

export default {
  name: 'App',

  components: {
    AddItem,
    List
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>

</style>
