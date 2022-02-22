<template>
  <div class="tic-login">
    <p class="tic-login-title">欢迎登录管理系统</p>
    <el-form ref="ruleForm"
             :rules="rules"
             :model="params"
             label-width="100px">
      <el-form-item label="用户名"
                    prop="name">
        <el-input v-model="params.name"
                  placeholder="请输入您的用户名">
        </el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="password">
        <el-input type="password"
                  placeholder="请输入您的密码"
                  v-model="params.password"
                  show-password></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary"
                   @click="submitForm">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import Crypto from '@/utils/crypto'
import { login } from '@/request/apis'
import { local } from '@/utils/util'
import { ILogin } from '@/type/Loing'

export default defineComponent({
  name: 'TicLogin',
  props: {
    redirect: {
      type: String,
      default: '',
    },
    apiHost: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const params = reactive({
      name: '',
      password: '',
    })

    const ruleForm = ref(null) as any
    const rules = reactive({
      name: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
      ],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
    })

    const submitForm = async () => {
      ruleForm.value.validate((valid: any) => {
        if (valid) {
          login(params, props.apiHost).then((res) => {
            debugger
            if (res) {
              local.set('token', JSON.stringify(res))
              window.location.href = props.redirect || '/'
            } else {
              params.password = ''
            }
          })
        }
      })
    }

    return {
      params,
      ruleForm,
      rules,
      submitForm,
    }
  },
})
</script>


<style lang="scss" scoped>
.tic-login {
  width: 460px;
  height: 300px;
  position: absolute;
  top: 50%;
  margin-top: -150px;
  left: 50%;
  margin-left: -250px;
  background: #fcfcfc;
  border-radius: 5px;
  box-shadow: 3px 3px 3px #ddd;
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 0 20px;

  .el-form {
    background: #fcfcfc;
    margin-top: 20px;
  }
  .tic-login-title {
    font-size: 16px;
    padding-left: 20px;
    text-align: center;
    padding: 20px 0 10px 0;
  }
}
</style>