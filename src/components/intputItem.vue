<template>
  <tr :class="{'border-b': index === inputItem.subItems.length - 1}" v-for="(subItem, index) in inputItem.subItems">
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1" v-if="index === 0">
        <input
            v-model="inputItem.dish"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1" v-if="index === 0">
        <input
            v-model="inputItem.peopleNum"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1">
        <input
            v-model="subItem.ingredients"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1">
        <input
            v-model="subItem.potNum"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1">
        <input
            v-model="subItem.boxNum"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1">
        <input
            v-model="subItem.kg"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1">
        <input
            v-model="subItem.total"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1">
        <input
            v-model="subItem.unit"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1">
        <input
            v-model="subItem.supplier"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-1">
        <input
            v-model="subItem.note"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
    </td>
    <td
        class="px-3 py-2 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">

      <div class="flex">
        <Button
            v-if="index === 0"
            :color="'indigo'"
            class="flex-1 mr-3"
            style="margin-top: -10px;margin-left: -10px"
            @click="addSubItem"
        > +
        </Button>

        <Button
            v-if="index === 0"
            :color="'green'"
            class="flex-1"
            style="margin-top: -10px;margin-left: -10px"
            @click="emitAddItem"
        > v
        </Button>

        <Button
            v-if="index > 0"
            :color="'red'"
            class="flex-1"
            style="margin: 0px 15px 0px 10px"
            @click="deleteSubItem(index)"
        > x
        </Button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import {useInputItem} from "../compositables/useInputItem";
import Button from "../components/button.vue"
import {reactive, ref, toRaw, toRefs} from "vue";

const emit = defineEmits(['add-item', 'delete-item', 'edit-item'])

const inputDefault = {
  dish: '',
  peopleNum: '',
  subItems: [{
    ingredients: '',
    potNum: '',
    boxNum: '',
    kg: '',
    total: '',
    unit: '',
    supplier: '',
    note: '',
  }]
}

const inputItem = reactive({...inputDefault})

const addSubItem = () => {
  inputItem.subItems.push({
    ingredients: '',
    potNum: '',
    boxNum: '',
    kg: '',
    total: '',
    unit: '',
    supplier: '',
    note: '',
  })
}

const deleteSubItem = (key) => {
  inputItem.subItems.splice(key, 1)
}
const emitAddItem = () => {
  inputItem.id = Math.random()
  let item = {...inputItem}
  emit("add-item", item)
  Object.assign(inputItem, inputDefault);
  inputItem.subItems = [{...inputDefault.subItems}]
}

defineExpose({
  emitAddItem,
});

</script>

<style scoped>

</style>