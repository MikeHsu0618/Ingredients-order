import {reactive, ref, toRefs} from "vue";

export function useInputItem() {
  const items = reactive({
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
      }],
    })
  
  const inputItems = ref([])
  
  const addItem = (item) => {
    console.log('addItem', item)
    inputItems.value.push(item)
  }
  
  const deleteItem = (id) => {
    console.log('delete', id)
    let index = inputItems.value.findIndex(item => item.id === id)
    inputItems.value.splice(index, 1)
  }
  
  const editItem = (editItem) => {
    console.log('edit', editItem)
  
    inputItems.value.forEach((item, key) => {
      if (item.id === editItem.id) inputItems[key] = editItem
    })
  }
  
  return {
    inputItems,
    addItem,
    deleteItem,
    editItem,
    items
  }
}