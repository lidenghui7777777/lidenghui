<template>
  <div>

    <!-- <h1>123</h1>
    <p>123</p> -->
 <el-button type="primary" @click="willAdd">
添加
 </el-button>
    <vadd :info='info'></vadd>
 <vlist></vlist>
  </div>
</template>
<script>
import vadd from "./components/add";
import vlist from "./components/list";
export default {
  components: {
    vadd,
    vlist,
  },
  data() {
    return {
      info:{
         isshow:false 
      }
    };
  },
  methods: {
    willAdd(){
      this.info.isshow=!this.info.isshow

    }
  },
};
</script>
<style>
</style>