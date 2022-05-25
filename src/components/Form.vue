<template>
  <form @submit.prevent="handleNewTask">
    <input type="text" v-model="newTask" placeholder="Insira a tarefa"/>
    <input type="submit" value="Adicionar"/>
  </form>
</template>

<script>
import Task from '../types/Task.js'

export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
      handleNewTask() {
          this.$emit('add', new Task(this.newTask))
          this.newTask = ''
      }
  },
};
</script>
