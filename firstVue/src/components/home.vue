<template>
  <div style="background-color: #666;min-height:900px">
    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:900px" @select="handleSelect">
              <el-menu-item index="1">一</el-menu-item>
              <el-menu-item index="2">二</el-menu-item>
              <el-menu-item index="3">三</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div>
          </div>
 
          <div style="margin-top:10px">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        searchCriteria: '',
        breadcrumbItems: ['一'],
      }
    },
 
    methods:{
      handleIconClick(ev) {
        console.log(ev);
      },
 
      handleSelect(key, keyPath){
        switch(key){
          case '1':
            this.$router.push('/page1');
            this.breadcrumbItems  = ['一']
            break;
          case '2':
            this.$router.push('/page2')
            this.breadcrumbItems  = ['二']
            break;
          case '3':
            this.$router.push('/page3')
            this.breadcrumbItems  = ['三']
            break;
        }
      },
 
    },
  }
</script>
