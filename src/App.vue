<template>
  <v-app>
    <v-container>
      <AddItem />
      <List />
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
