<template>
  <ul>
    <select v-model="selected" @change="onChange($event)">
      <option disabled value="">Escolha a visualização</option>
      <option v-for="option in options" :key="option.text">
        {{ option.text }}
      </option>
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
      selected: "",
      options: [
        { text: "Todos", value: "1" },
        { text: "A fazer", value: "2" },
        { text: "Concluído", value: "3" },
        { text: "Deletado", value: "4" },
      ],
    };
  },
  computed: {
    itens() {
      return this.data.filter((item) => item.excluded === false);
    },
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
      return this.data.filter((item) => item.concluded === false);
    },
  },
};
</script>
