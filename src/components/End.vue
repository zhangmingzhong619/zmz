<template>
  <div>
    <br />
    <br />
    <h3>谢谢你的配合！</h3>
    <h5>选择结果：{{ results }}</h5>
  </div>
</template>

<script>
export default {
  name: "End",
  data() {
    return {
      
    };
  },
  computed:{
     results(){    //经过getters访问状态
       return this.$store.getters.getResult;   //像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
     },
  },
};
</script>