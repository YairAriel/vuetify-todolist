<template>
  <v-app>
    <v-container>
      <AddItem />
    </v-container>
  </v-app>
</template>

<script>
import AddItem from './components/AddItem';

export default {
  name: 'App',

  components: {
    AddItem,
  },

  data: () => ({
    //
  }),
};
</script>
