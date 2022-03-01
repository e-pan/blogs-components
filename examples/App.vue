<template>
  <div class="box">
    <h2>Header组件：</h2>
    <ComponentHeader :menus="menus"
               :systems="systems"
               :userInfo="userInfo" />
  </div>
  <div class="box">
    <h2>上传组件：</h2>
    <div>
      <h4>action：上传地址（必填）</h4>
      <h4>showFileList：是否显示上传列表，默认不显示(选填)</h4>
      <h4>multiple：是否支持上传多张图片，默认单张(选填)</h4>
      <h4>limit：允许上传的最大数量, 默认5张(选填)</h4>
      <h4>size：允许上传图片的size，默认5mb(选填)</h4>
      <h4>accept：接受上传的文件类型, 默认image/*图片类型(选填)</h4>
    </div>
    <ComponentUpload :action="upload.action"
               :show-file-list="upload.showFileList"
               :multiple="upload.multiple"
               :limit="upload.limit"
               :size="upload.size"
               :accept="upload.accept"
               @uploadEmit="uploadEmitFun" />
  </div>
  <!-- 
  <div class="box">
    <h2>面包屑组件：</h2>
    <ComponentBreadcrumb :breadcrumb="breadcrumb" />
  </div>
  <div class="box">
    <h2>分页组件：</h2>
    <ComponentPagination :pageParams="pageParams" @pageEmit="pageEmitFun" />
  </div>
  <div class="box">
    <h2>基础框架组件：</h2>
    <ComponentLayout
      :systems="systems"
      :userInfo="userInfo"
      :systemInfo="systemInfo"
    />
  </div>
  <div class="box">
    <h2>错误页面组件：</h2>
    <Component404 />
  </div>
  <div class="box">
    <h2>超出提示组件：</h2>
    <ComponentTooltip :content="tooltip.content" :width="tooltip.width" />
  </div>
  
  <div class="box">
    <h2>Footer组件：</h2>
    <ComponentFooter :systemInfo="systemInfo" />
  </div>
  <div class="box">
    <h2>Company组件：</h2>
    <ComponentCompany :api-host="apiHost" :cust-id="custId" />
    <el-buttonm>添加</el-buttonm>
    <el-buttonm>编辑</el-buttonm>
  </div>
  <div class="box">
    <h2>树形组件</h2>
    <div>
      <h4>treeDatas：必填（渲染数据源）</h4>
      <h4>defaultProps：必填（基础配置）</h4>
      <h4>nodeKey：必填（获取选中id对应的字段名）</h4>
      <h4>defaultCheckedKeys：选填（默认选中的数据）</h4>
      <h4>方法：clearCheck 清除选中状态</h4>
    </div>
    <el-button @click="handleClearCheck">清除选中</el-button>
    <ComponentTree
      ref="refTree"
      :tree-datas="tree.treeDatas"
      :node-key="tree.nodeKey"
      :default-props="tree.defaultProps"
      :defaultCheckedKeys="tree.defaultCheckedKeys"
      @emit:tree="emitTree"
    />
  </div>
  <div class="box">
    <h2>级联选择器</h2>
    <div>
      <h4>apiHost：必填</h4>
      <h4>categoryIds：非必填 (默认选中的类目)</h4>
      <h4>
        categoryProps：非必填（multiple是否可以多选、checkStrictly选择到最后一级）
      </h4>
    </div>
    <ComponentCascader
      :api-host="apiHost"
      :category-ids="cascader.categoryIds"
      :category-props="cascader.categoryProps"
      @emit:category="categoryEmit"
    />
  </div> -->
  <!-- <div class='box'
       style="position: fixed; top: 30%; left: 40%; z-index: 999999;">
    <h2>登录组件</h2>
    <div>
      <h4>
        apiHost：必填
      </h4>
      <h4>
        redirect：选填 (成功后的重定向地址)
      </h4>
    </div>
    <ComponentLogin :api-host='apiHost'
              :redirect='redirect' />
  </div> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, provide } from 'vue'
//@ts-ignore
import config from './../package.json' // 当前发布版本
import ComponentBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import ComponentFooter from '@/components/footer/Footer.vue'
import ComponentHeader from '@/components/header/Header.vue'
import ComponentPagination from '@/components/pagination/Pagination.vue'
import ComponentLayout from '@/components/layout/Layout.vue'
import ComponentLogin from '@/components/login/Login.vue'
import Component404 from '@/components/error/404.vue'
import ComponentTooltip from '@/components/tooltip/Tooltip.vue'
import ComponentUpload from '@/components/upload/Upload.vue'
import ComponentTree from '@/components/tree/Tree.vue'
import ComponentCascader from '@/components/cascader/Cascader.vue'

export default defineComponent({
  name: 'App',
  components: {
    ComponentLayout,
    ComponentPagination,
    ComponentHeader,
    ComponentFooter,
    ComponentBreadcrumb,
    ComponentLogin,
    Component404,
    ComponentTooltip,
    ComponentUpload,
    ComponentTree,
    ComponentCascader,
  },
  // provide() {
  //   return {
  //     menus: [
  //       {
  //         name: 'Service Error',
  //         path: '',
  //       },
  //       {
  //         name: 'Client Error',
  //         path: '',
  //         subMenu: [
  //           {
  //             name: 'JavaScript Error',
  //             path: '/client/javaScript',
  //           },
  //           {
  //             name: 'StaComponents Error',
  //             path: '/client/staComponent',
  //           },
  //           {
  //             name: 'API Error',
  //             path: '/client/API',
  //           },
  //           {
  //             name: 'Uploadfileimg',
  //             path: '/client/Uploadfileimg',
  //           },
  //         ],
  //       },
  //     ],
  //   }
  // },
  setup() {
    const breadcrumb = ref({
      delimiter: '/', // 分隔符
      items: [
        {
          name: '首页',
          path: '/',
        },
        {
          name: '友情链接',
          path: '',
        },
        {
          name: '链接列表',
          path: '/friend/list',
        },
      ],
    })
    let menus = ref([]) as any
    provide('menus', menus)
    const systems = ref([
      {
        name: '用户端',
        path: 'http://www.fuzhongkuo.com.cn',
      },
      {
        name: '管理端',
        path: 'http://admin.fuzhongkuo.com.cn',
      },
    ])
    const userInfo = ref({
      userName: 'E盘',
    })
    const systemInfo = ref({
      copyright: '2018-2021',
      version: config.version,
      buildDate: '2021年09月24日 18:00:00',
    })
    // const apiHost = "http://api.fuzhongkuo.com/";
    const apiHost = 'http://localhost:4001/'
    const redirect = '/'
    const tooltip = ref({
      content:
        '12312312123123123123213123211231231231232131232112312312312321312321123123123123213123211231231231232131232112312312312321312321123123123123213123211231231231232131232112312312312321312321123123123123213123211231231231232131232112312312312321312321123123123123213123211231231231232131232112312312312321312321123123123123213123211231231231232131232112312312312321312321123123123123213123211231231231232131232112312312312321312321312321312321',
      width: 60,
    })
    const pageParams = ref({
      pageNum: 1,
      pageRow: 10,
      pageTotal: 400,
    })
    const custId = ref(175)
    const system = ref('rsts')
    const expandAll = ref(true) // 非必填
    // 捕获父组件返回的数据
    const pageEmitFun = (val: any): void => {
      console.log(val)
    }
    const uploadEmitFun = (val: any): void => {
      console.log(val)
    }
    /* 树形插件 */
    const tree = reactive({
      // 渲染数据源
      treeDatas: [],
      nodeKey: '', // 获取选中id对应的字段名
      defaultProps: {
        children: '', // 叶子节点的名称
        label: '', // 显示到页面的字段名
      },
      defaultCheckedKeys: [],
    })
    const refTree = ref(null) as any
    const handleClearCheck = () => {
      console.log(refTree)
      refTree.value && refTree.value.clearCheck() // 设置选中清空
    }
    const emitTree = (val: any): void => {
      console.log('tree emit', val)
    }
    // 上传插件
    const upload = reactive({
      action: 'http://api.fuzhongkuo.com/upload',
      // action: 'http://localhost:4001/upload',
      showFileList: true,
      multiple: true,
      limit: 5,
      size: 1,
      accept: 'image/*,.pdf',
    })
    /* 级联选择器 */
    const cascader = reactive({
      categoryIds: {},
      categoryProps: {
        multiple: true,
        checkStrictly: true,
      },
    })
    // 级联选择器的返回值
    const categoryEmit = (val: any): void => {
      console.log(val)
    }

    onMounted(() => {
      // 异步处理注入数据
      setTimeout(() => {
        menus.value = [
          {
            name: 'Service Error',
            path: '',
          },
          {
            name: 'Client Error',
            path: '',
            children: [
              {
                name: 'JavaScript Error',
                path: '/client/javaScript',
              },
              {
                name: 'StaComponents Error',
                path: '/client/staComponent',
              },
              {
                name: 'API Error',
                path: '/client/API',
              },
              {
                name: 'Uploadfileimg',
                path: '/client/Uploadfileimg',
              },
            ],
          },
        ]
        console.log(menus)
      }, 2000)
    })

    return {
      breadcrumb,
      menus,
      systems,
      userInfo,
      systemInfo,
      apiHost,
      redirect,
      tooltip,
      pageParams,
      pageEmitFun,
      uploadEmitFun,
      custId,
      system,
      expandAll,
      tree,
      emitTree,
      handleClearCheck,
      upload,
      cascader,
      categoryEmit,
    }
  },
})
</script>

<style lang="scss">
body {
  margin: 0 auto;
  height: 100vh;
}
#app {
  margin: 0 auto;
  padding: 0;
  height: 100vh;
}
.box {
  margin: 20px;
  box-shadow: 3px 3px 3px #ddd;
}
</style>
