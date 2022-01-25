<template>
  <div class="flex flex-col mt-4 mx-2">
    <div class="py-2  my-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">

      <!--      <Button @click="childAddItem">新增</Button>-->

      <div class="inline-block min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full">
          <ListHead
              :drop-down-list="dropDownList"
          ></ListHead>
          <tbody class="bg-white">
          <InputItem
              @add-item="addItem"
          ></InputItem>
          <template v-for="item in inputItems">
            <ListItem
                :isEdit=false
                :listItem="item"
                @delete-item="deleteItem"
                @edit-item="editItem"
            ></ListItem>
          </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ListItem from '../components/listItem.vue'
import InputItem from '../components/intputItem.vue'
import ListHead from '../components/listHead.vue'
import {onMounted, ref} from "vue";
import {useInputItem} from "../compositables/useInputItem";

const name = 'profile';

const {
  inputItems,
  addItem,
  deleteItem,
  editItem
} = useInputItem()

// const childAddItem = () => listItem.value.emitAddItem()

const dropDownList = [
  {
    name: '編輯',
    active: false
  },
  {
    name: '刪除',
    active: false
  },
  {
    name: '儲存',
    active: false
  }
]


</script>

<style scoped>

</style>