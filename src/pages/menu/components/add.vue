<template>
  <div>
    <el-dialog title="菜单添加" :visible.sync="info.isshow">
      <el-form :model="form">
        <el-form-item label="菜单名称" :label-width="width">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" :label-width="width">
          <el-select v-model="form.pid" placeholder="----请选择----">
            <el-option label="顶级菜单" value="0"></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>

        <el-form-item label="菜单类型" :label-width="width">
          <el-radio v-model="form.type" label="1">目录</el-radio>
          <el-radio v-model="form.type" label="2">菜单</el-radio>
        </el-form-item>

        <el-form-item label="菜单图标" :label-width="width" v-if="form.type==1">
          <el-select v-model="form.icon" placeholder="请选择活动区域">
            <el-option label="网格" value="el-icon-share">
              <i class="el-icon-share"></i>
            </el-option>
            <el-option label="检查" value="el-icon-s-check">
              <i class="el-icon-s-check"></i>
            </el-option>
            <el-option label="旋转" value="el-icon-loading">
              <i class="el-icon-loading"></i>
            </el-option>
            <el-option
              label="雨伞"
              value="el-icon-umbrella
"
            >
              <i class="el-icon-umbrella"></i>
            </el-option>
            <el-option label="礼盒" value="el-icon-box">
              <i class="el-icon-box"></i>
            </el-option>
            <el-option label="奖杯" value="el-icon-trophy">
              <i class="el-icon-trophy"></i>
            </el-option>
            <el-option label="足球" value="el-icon-soccer">
              <i class="el-icon-soccer"></i>
            </el-option>
          
          </el-select>
        </el-form-item>

        <el-form-item label="菜单地址" :label-width="width" v-else>
          <el-select v-model="form.url" placeholder="请选择活动区域">
            <el-option v-for="item in indexRouters"  :key="item.path" :label="'/'+item.path" :value="item.name"></el-option>
    
          </el-select>
        </el-form-item>

        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949" 
              active-value="1"
    inactive-value="2"
           
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isshow = false">取 消</el-button>
        <el-button type="primary" @click="info.isshow = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {indexRouters} from '../../../router/index'
export default {
  props:['info'], 
  components: {},
  data() {
    return {
      width: "160px",
      // isshow: true,
      form: {
        // name: "",
        // region: "",
        pid: "",
        title: "",
        type: 1,
        icon: "",
        url: "",
        status: 1,
      },
      indexRouters:indexRouters,
    };
  },
  methods: {},
};
</script>
<style>
</style>