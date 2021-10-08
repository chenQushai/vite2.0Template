<template>
    <div
        class="login-container"
        :style="{
            background: `url(${loginBg})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover'
        }"
    >
        <div class="login-box">
            <div class="company-name-box">
                <div class="company-logo"
                     :style="{backgroundImage:`url(${logo})`}"></div>
                <div class="company-name">vue3.0+vite2.0架构设计</div>
            </div>
            <div class="left-img" :style="{backgroundImage: `url(${leftImg})`}"></div>
            <el-divider direction="vertical"></el-divider>
            <div class="right-login">
                <p class="login">欢迎进入vue3.0项目</p>
                <div class="login-input">
                    <el-form ref="form"
                             :model="loginForm"
                             :rules="rules"
                             element-loading-text="登录中"
                             v-loading="loginLoading">
                        <el-form-item prop="account">
                            <el-input
                                placeholder="账号"
                                v-model="loginForm.account"
                                maxlength="30"
                                prefix-icon="el-icon-user-solid">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input
                                type="password"
                                v-model="loginForm.password"
                                maxlength="30"
                                placeholder="密码">
                                <template #prefix>
                                    <i style="line-height:40px;margin-left: 7px;font-size: 12px!important;"
                                       class="iconfont iconmima1"></i>
                                </template>

                            </el-input>
                        </el-form-item>
                    </el-form>
                    <div class="margin-top50 login-btn">
                        <el-button type="primary" class="btn" @click="login()">登录</el-button>
                        <el-button plain class="resetBtn" @click="reset">重置</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {reactive, ref} from 'vue'
    import loginBackImg from '../assets/img/login-bg2.png';
    import logoImg from '../assets/logo.png';
    import leftImgBg from '../assets/logo.png'
    import {useRouter} from 'vue-router'

    const loginBg = loginBackImg;
    const logo = logoImg;
    const leftImg = leftImgBg;
    const router = useRouter();
    let loginLoading = ref(false);

    let loginForm = reactive({
        account: '',
        password: ''
    });
    let form = ref(null);
    let rules = reactive({
        account: [
            {required: true, message: '请输入账号', trigger: 'change'},
            // {type: 'string', validator: check, trigger: 'change'},
        ],
        password: [
            {required: true, message: '请输入密码', trigger: 'change'}
        ]
    });

    let login = () => {
        form.value.validate((valid) => {
            if (valid) {
                alert('submit!');
                router.push('/home')
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    };

    let reset = () => {
        form.value.resetFields();
    };
</script>

<style lang="scss" scoped>
    .login-container {
        display: flex;
        height: 100vh;
        background-repeat: no-repeat;
        .login-box {
            position: relative;
            width: 989px;
            min-width: 989px;
            height: 517px;
            padding: 20px;
            margin: auto;
            border-radius: 20px;
            background-color: rgb(255, 255, 255);
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            .company-name-box {
                position: absolute;
                top: -96px;
                left: 8%;
                .company-logo {
                    display: inline-block;
                    width: 88px;
                    height: 74px;
                    vertical-align: middle;
                    background-size: 100% 100%;
                }
                .company-name {
                    display: inline-block;
                    margin-left: 20px;
                    font-size: 40px;
                    font-family: FZZhengHeiS-R-GB;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    vertical-align: middle;

                }
            }

            .left-img {
                float: left;
                width: 431px;
                height: 431px;
                margin-top: 66px;
                margin-left: -20px;
                background-repeat: no-repeat;
                background-size: 431px 431px;
            }
            .el-divider--vertical {
                height: 24em;
                margin-left: 46px;
                margin-top: 59px;
            }

            .right-login {
                float: right;
                width: 450px;
                height: 100%;
                padding-left: 30px;
                .login {
                    margin-top: 60px;
                    font-size: 30px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(64, 158, 255, 1);
                    letter-spacing: 5px;
                    text-align: center;
                }
                .login-input {
                    margin-top: 40px;
                    width: 360px;
                }
                .operation-box {
                    margin-top: 20px;
                }
                .login-btn {
                    text-align: center;
                    .btn {
                        width: 172px;
                    }
                    .resetBtn {
                        width: 172px;
                        color: #409EFF;
                    }
                }
            }
        }
    }
</style>