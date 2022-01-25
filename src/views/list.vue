<template>
  <div class="flex flex-col mt-4 mx-2">
    <div class="py-2  my-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">

      <!--      <Button @click="childAddItem">新增</Button>-->

      <div class="inline-block min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full">
          <ListHead></ListHead>
          <tbody class="bg-white">
          <InputItem
              @add-item="addItem"
          ></InputItem>

          </tbody>
        </table>
        <draggable
            class="list-group"
            tag="transition-group"
            :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }"
            v-model="inputItems"
            v-bind="dragOptions"
            @start="drag=true"
            @end="drag=false"
            item-key="id"
        >
          <template #item="{ element }">
            <div >
              <ListItem
                  :isEdit=false
                  :listItem="element"
                  @delete-item="deleteItem"
                  @edit-item="editItem"
              ></ListItem>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup>
import ListItem from '../components/listItem.vue'
import InputItem from '../components/intputItem.vue'
import ListHead from '../components/listHead.vue'
import {onMounted, reactive, ref} from "vue";
import {useInputItem} from "../compositables/useInputItem";
import draggable from "vuedraggable";

const dragOptions = {
  animation: 200,
  group: "description",
  disabled: false,
  ghostClass: "ghost"
}
const drag = ref(false)

const {
  inputItems,
  addItem,
  deleteItem,
  editItem
} = useInputItem()

// const childAddItem = () => listItem.value.emitAddItem()

</script>

<style scoped>

</style>