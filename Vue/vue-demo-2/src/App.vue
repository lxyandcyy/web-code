<template>
  <div id="app">
    {{n}}
  <button @click="add">+1</button>
  </div>
</template>

<script>

export default {
  components: {
  },
  data(){
    return{
      n:0,
      lxy:'sd',
      array:[2,3,4,5,6]
    }
  },
  methods:{
    add(){
      this.n++;
      console.log(this.lxy)
    }
  }


}

</script>

<style lang="scss">

</style>
