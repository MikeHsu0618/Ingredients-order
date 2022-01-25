<template>
  <ul
      class="flex" style="cursor: move"
      :class="{'border-b': index === listItem.subItems.length - 1}" v-for="(subItem, index) in listItem.subItems">
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit && index === 0">
        <input
            v-model="listItem.dish"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-if="!isEdit && index === 0"
          class="pl-3 text-sm leading-5 text-gray-500"> {{ listItem.dish }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit && index === 0">
        <input
            v-model="listItem.peopleNum"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-if="!isEdit && index === 0"
          class="text-sm leading-5 text-gray-500"> {{ listItem.peopleNum }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit">
        <input
            v-model="subItem.ingredients"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-else
          class="text-sm leading-5 text-gray-500"> {{ subItem.ingredients }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit">
        <input
            v-model="subItem.potNum"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-else
          class="text-sm leading-5 text-gray-500"> {{ subItem.potNum }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit">
        <input
            v-model="subItem.boxNum"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-else
          class="text-sm leading-5 text-gray-500"> {{ subItem.boxNum }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit">
        <input
            v-model="subItem.kg"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-else
          class="text-sm leading-5 text-gray-500"> {{ subItem.kg }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit">
        <input
            v-model="subItem.total"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-else
          class="text-sm leading-5 text-gray-500"> {{ subItem.total }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit">
        <input
            v-model="subItem.unit"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-else
          class="text-sm leading-5 text-gray-500"> {{ subItem.unit }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit">
        <input
            v-model="subItem.supplier"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-else
          class="text-sm leading-5 text-gray-500"> {{ subItem.supplier }}
      </div>
    </li>
    <li
        class="w-100 px-1 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
      <div class="mb-4" v-if="isEdit">
        <input
            v-model="subItem.note"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
      </div>
      <div
          v-else
          class="text-sm leading-5 text-gray-500"> {{ subItem.note }}
      </div>
    </li>
    <li
        class="w-100 px-3 py-1 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">

      <div class="relative " style="width: 68px;cursor: pointer;" v-if="!isCreate && (index === 0)">
        <!-- Dropdown toggle button -->
        <button class="block ml-2 p-2 bg-white bg-gray-100 rounded-lg rounded-md" @click="openDropDown = !openDropDown">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
          </svg>

        </button>

        <!-- Dropdown List -->
        <div
            v-if="openDropDown"
            class="absolute z-10 right-0 w-48 py-2 mt-2 bg-white bg-gray-100 rounded-md shadow-xl">
          <a
              v-if="!isEdit"
              @click="setEditValue"
              class="block px-4 py-1 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
            Edit
          </a>
          <a
              @click="addSubItem"
              v-if="isEdit"
              class="block px-4 py-1 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
            Add SubItem
          </a>
          <a
              @click="emitEditItem"
              v-if="isEdit"
              class="block px-4 py-1 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
            Save
          </a>
          <a
              @click="emitDelete"
              class="block px-4 py-1 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
            Delete
          </a>
        </div>
      </div>
      <div class="flex">
        <Button
            v-if="isCreate && (index === 0)"
            :color="'indigo'"
            class="flex-1 mr-3"
            style="margin-top: -10px;margin-left: -10px"
            @click="addSubItem"
        > +
        </Button>

        <Button
            v-if="isCreate && (index === 0)"
            :color="'green'"
            class="flex-1"
            style="margin-top: -10px;margin-left: -10px"
            @click="emitAddItem"
        > v
        </Button>

        <Button
            v-if="isEdit && index > 0"
            :color="'red'"
            class="flex-1"
            style="margin: 0px 15px 0px 10px"
            @click="deleteSubItem(index)"
        > x
        </Button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import {useInputItem} from "../compositables/useInputItem";
import Button from "../components/button.vue"
import {reactive, ref, toRaw, toRefs} from "vue";

const name = "ListItem"

const emit = defineEmits(['add-item', 'delete-item', 'edit-item'])
const props = defineProps({
  isEdit: Boolean,
  isCreate: Boolean,
  listItem: Object,
})

const isEdit = ref(props.isEdit)
const openDropDown = ref(false)

const {items} = useInputItem()

const deleteSubItem = (key) => props.listItem.subItems.splice(key, 1)
const addSubItem = () => {
  props.listItem.subItems.push({
    ingredients: '',
    potNum: '',
    boxNum: '',
    kg: '',
    total: '',
    unit: '',
    supplier: '',
    note: '',
  })
  openDropDown.value = !openDropDown.value
}
const emitDelete = () => {
  openDropDown.value = !openDropDown.value
  emit("delete-item", props.listItem.id)
}
const emitAddItem = () => {
  console.log('listItem')
  openDropDown.value = !openDropDown.value
  let item = toRaw(items)
  item.id = Math.random();
  emit("add-item", item)
}
const emitEditItem = () => {
  isEdit.value = !isEdit.value
  openDropDown.value = !openDropDown.value
  emit("edit-item", toRaw(props.listItem))
}
const setEditValue = () => {
  openDropDown.value = !openDropDown.value
  isEdit.value = !isEdit.value
}

defineExpose({
  emitAddItem,
});

</script>

<style scoped>

</style>