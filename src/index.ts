import '@/assets/style/variables.scss';
import ComponentBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import ComponentFooter from '@/components/footer/Footer.vue'
import ComponentHeader from '@/components/header/Header.vue'
import ComponentLayout from '@/components/layout/Layout.vue'
import ComponentPagination from '@/components/pagination/Pagination.vue'
import ComponentLogin from '@/components/login/Login.vue'
import Component404 from '@/components/error/404.vue'
import ComponentTooltip from '@/components/tooltip/Tooltip.vue'
import ComponentUpload from '@/components/upload/Upload.vue'
import ComponentCascader from '@/components/cascader/Cascader.vue'
import ComponentTree from '@/components/tree/Tree.vue'

const components = [
  ComponentBreadcrumb,
  ComponentFooter,
  ComponentHeader,
  ComponentLayout,
  ComponentPagination,
  ComponentLogin,
  Component404,
  ComponentTooltip,
  ComponentUpload,
  ComponentCascader,
  ComponentTree
]

const install = (Vue: any) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default {
  version: 'version-0.0.1',
  install,
  ...components
}
