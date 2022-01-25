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
  
  const inputItems = reactive([])
  
  const addItem = (item) => {
    console.log('addItem', item)
    inputItems.push(item)
  }
  
  const deleteItem = (id) => {
    console.log('delete', id)
    let index = inputItems.findIndex(item => item.id === id)
    inputItems.splice(index, 1)
  }
  
  const editItem = (editItem) => {
    console.log('edit', editItem)
  
    inputItems.forEach((item, key) => {
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