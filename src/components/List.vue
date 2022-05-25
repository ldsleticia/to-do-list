<template>
  <ul>

    <select v-model="selected">
      <option disabled value="">Escolha a visualização</option>
      <option>Todos</option>
      <option>A fazer</option>
      <option>Concluído</option>
      <option>Deletado</option>
    </select>

    <li v-for="item in itens" :key="item.id">
      <input type="checkbox" id="checkbox" v-model="item.concluded" />
      <label for="checkbox"> {{ item.description }} </label>
      <button @click="() => $emit('remove', item)">Excluir</button>
    </li>

  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {},
    },
  },
  data() {
      return {
          selected: ''
      }
  },
  computed: {
    itens() {
      return this.data.filter((item) => item.excluded === false);
    },
  },
};
</script>
