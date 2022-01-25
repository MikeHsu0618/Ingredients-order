<template>
  <input type="text" v-model="a.id">
    {{b.id}}

</template>

<script>
import {ref, reactive, toRaw} from 'vue'
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  setup() {
    const disabled = ref(false)
    const a = ref({
      id: 13414,
    })

    const b = toRaw(a.value)
    b.aa = 1
    console.log(a, b)



    const list2 = reactive(
        [
          {id: 1, name: '標籤1'},
          {id: 2, name: '標籤2'},
          {id: 3, name: '標籤3'},
          {id: 4, name: '標籤4'},
          {id: 5, name: '標籤5'},
        ]
    )
    const end1 = (ev) => {
      console.log("拖動結束1",ev)
    }
    const start2 = (event) => {
      console.log("開始拖動",event)
    }
    const end2 = (ev) => {
      console.log("拖動結束2",ev)
    }
    const handleDel = (index, id) => {
      list1.splice(index, 1)
      let q = list2.find((value, index, arr) => {
        return value.id === id
      })
    }
    return {
      disabled,
      a,
      b,
      end1,
      start2,
      end2,
      handleDel
    }
  }
}
</script>

<style  scoped>
.dragList{
  width: 500px;
  height:300px;
  padding: 20px;
}
.dragList-list1{
  width: 120px;
}
.list-complete-item1{
  cursor: pointer;
  font-size: 14px;
  padding: 0 12px;
  display: inline-block;
  margin-bottom: 10px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #bfcbd9;
  transition: all 1s;
}
.dragArea1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dragList-list2{
  margin-top: 20px;
  height: 200px;
  border: 1px solid #8a8a8a;
}
.dragArea2{
  display: flex;
  align-items: center;
}
.list-complete-item2 {
  cursor: pointer;
  font-size: 14px;
  padding: 0 12px;
  display: inline-block;
  margin: 10px;
  width: 100px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #bfcbd9;
  transition: all 1s;
}
</style>