<template>
  <div id="app">
    <h1>Lista de Tarefas</h1>
    <List :data="list" @remove="handleRemove"/>
    <Form @add="addNewTask" @onChange="handleN"/>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Form from "./components/Form.vue";

export default {
  components: {
    List,
    Form,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    addNewTask(newTask) {
      this.list.push(newTask);
    },
    handleRemove(item) {
      const index = this.list.findIndex(i => i.id === item.id)
      this.list[index].excluded = true
    },
    handleN(item) {
      const index = this.list.findIndex(i => i.id === item.id)
      this.list[index].concluded = true
    }
  },
};
</script>
