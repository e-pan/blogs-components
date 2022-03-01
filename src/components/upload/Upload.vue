<template>
  <div class="upload-container">
    <el-upload ref="uploadRef"
               :action="action"
               :show-file-list='showFileList'
               :multiple="multiple"
               :limit="limit"
               :accept="accept"
               :file-list="defaultFileList"
               :on-remove="handleRemove"
               :on-success="handleSuccess"
               :before-upload="beforeUpload"
               :on-exceed="handleExceed"
               :on-change="handleChange"
               class="editor-slide-upload">
      <el-button size="small"
                 type="primary">点击上传</el-button>
      <!-- <template #tip>
        <div class="el-upload__tip">{{ tips }}</div>
      </template> -->
    </el-upload>
  </div>
</template>

<script>
import { reactive, defineComponent, toRefs, onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'TicUpload',
  props: {
    // 上传地址（必填）
    action: {
      type: String,
      default: '',
    },
    // 是否显示上传列表，默认不显示
    showFileList: {
      default: false,
      type: Boolean,
    },
    // 是否支持上传多张图片，默认单张(选填)
    multiple: {
      default: false,
      type: Boolean,
    },
    // 允许上传的最大数量
    limit: {
      type: Number,
      default: 5,
    },
    // 允许上传的最大数量
    size: {
      type: Number,
      default: 5,
    },
    // 接受上传的文件类型
    accept: {
      type: String,
      default: 'image/*',
    },
    // tips: {
    //   type: String,
    //   default: '',
    // },
    fileList: {
      type: Array,
      default: [],
    },
  },
  emits: ['success-callback', 'remove-callback', 'change-callback'],
  setup(props, ctx) {
    const uploadRef = ref()
    let UploadObject = {}
    const dataMap = reactive({
      defaultFileList: props.fileList,
      dialogVisible: false,
      checkAllSuccess: () => {
        return Object.keys(UploadObject).every(
          (item) => UploadObject[item].hasSuccess
        )
      },
      handleSuccess: (response, file, fileList) => {
        if (response.code ===  200) {
          dataMap.defaultFileList = fileList
          ctx.emit('uploadEmit', fileList)
        }
        // const uid = file.uid
        // const objKeyArr = Object.keys(UploadObject)
        // if (response.retCode !== 0)
        //   return ElMessage.error(response.retMsg || '请求失败,请重新上传文件!')
        // for (let i = 0, len = objKeyArr.length; i < len; i++) {
        //   if (UploadObject[objKeyArr[i]].uid === uid) {
        //     UploadObject[objKeyArr[i]].url = response.data.url //附件
        //     UploadObject[objKeyArr[i]].hasSuccess = true
        //     // return
        //   }
        // }
        // setTimeout(() => {
        //   ctx.emit('success-callback', UploadObject)
        // }, 0)
      },
      handleRemove: (file, fileList) => {
        // const url = file.url
        // const objKeyArr = Object.keys(UploadObject)
        // for (let i = 0, len = objKeyArr.length; i < len; i++) {
        //   if (UploadObject[objKeyArr[i]].url === url) {
        //     delete UploadObject[objKeyArr[i]]
        //     break
        //   }
        // }
        // ctx.emit('remove-callback', UploadObject)
      },
      beforeUpload: async (file) => {
        if (file.size > props.size * 1024 * 1024) {
          ElMessage.warning(`单个文件不能超过${props.size}MB。`)
          throw new Error(`单个文件不能超过${props.size}MB。`)
        }
        const fileName = file.uid
        let a = document.createElement('a')
        a.href = window.URL.createObjectURL(file)
        UploadObject[fileName] = {
          hasSuccess: false,
          uid: file.uid,
          name: file.name,
        }
      },
      // handleSubmit() {
      //   const arr = Object.keys(UploadObject).map((v) => UploadObject[v])
      //   if (!dataMap.checkAllSuccess()) {
      //     ElMessage.warning(
      //       '请等待所有文件上传成功。如果文件上传失败，请手动删除错误文件后，重新上传!'
      //     )
      //     return
      //   }
      //   ctx.emit('success-callback', arr)
      //   dataMap.clearAll()
      // },
      // 选择文件
      handleExceed(files, fileList) {
        ElMessage.warning(
          `当前限制选择${props.limit}个文件，本次选择了${files.length}个文件。`
        )
      },
      clearAll() {
        UploadObject = {}
        dataMap.defaultFileList = []
        dataMap.dialogVisible = false
        uploadRef.value.clearFiles()
      },
      // 赋值
      setFileList() {
        if (dataMap.defaultFileList.length == 0) return false
        dataMap.defaultFileList.forEach((item, index) => {
          item.uid = index
          UploadObject[index] = item
        })
      },
      handleChange(file, fileList) {
        ctx.emit('change-callback', fileList)
      },
      uploadEmit: () => {
        console.log(dataMap.defaultFileList)
        ctx.emit('flise', dataMap.defaultFileList)
      },
    })

    onMounted(() => {
      dataMap.setFileList()
    })
    return { ...toRefs(dataMap), UploadObject, uploadRef }
  },
})
</script>