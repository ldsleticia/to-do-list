<template>
  <ul>
    <select v-model="selected">
      <option disabled value="">Escolha a visualização</option>
      <option value="1"> Todos </option>
      <option value="2"> A fazer </option>
      <option value="3"> Concluído </option>
      <option value="4"> Deletado </option>
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
    };
  },
  computed: {
    itens() {
      return this.data.filter((item) => item.excluded === false);
    },
  },
  methods: {
    itens() {
      return this.data.filter((item) => {
        if(this.selected === '1') {
          return item.concluded === false
        } else if (this.select === '2') {
          
        }
      })
    }
    },
  },
};
</script>
