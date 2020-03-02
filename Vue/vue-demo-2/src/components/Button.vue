<template>
  <div class="button">
    这是button内部的n/message:
    {{message}}
    <button @click="fn">+1</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:['message',"fn"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button{
  border: 1px solid black;
}
</style>
