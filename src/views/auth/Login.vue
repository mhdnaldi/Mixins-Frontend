<template>
  <div class="login">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h3 class="title">Login</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class="text-left mt-4" style="color: #232323; font-size: 14px">
            Hi!, Welcome Back!
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="mt-4">
          <b-form>
            <b-form-group
              class="text-left"
              style="color: #848484; font-size:14px"
              id="input-group-1"
              label="Email"
              label-for="input-1"
            >
              <b-form-input
                class="input"
                id="input-1"
                type="email"
                v-model="form.user_email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="text-left mt-5"
              style="color: #848484; font-size:14px"
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <b-form-input
                class="input"
                id="input-2"
                type="password"
                v-model="form.user_password"
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <router-link to="/forgot-password">
            <p
              class="text-right mt-4"
              style="color: #7E98DF; font-size: 14=6px"
            >
              Forgot password?
            </p>
          </router-link>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12">
          <b-button class="btn-login" @click="onSubmit">Login</b-button>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12">
          <div class="lines"></div>
          <p text-center style="display: inline-block; color:#848484">MIXINS</p>
          <div class="lines"></div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-button class="btn-login" type="reset" @click="onReset"
            >Reset</b-button
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class="mt-3" style="color: #313131; font-size: 14">
            Don't have an account?
            <router-link to="/register">
              <span style="color: #7e98df; cursor: pointer">Sign up</span>
            </router-link>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    onSubmit() {
      this.loginUser(this.form)
        .then(res => {
          this.$router.push('/mixins')
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    onReset() {
      this.form = {
        user_email: '',
        user_password: ''
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 500px;
  height: 710px;
  background-color: #fff;
  margin: 150px auto;
}

.title {
  font-size: 22px;
  color: #7e98df;
  margin-top: 41px;
}

.input {
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid black;
  border-radius: 0px;
}

.btn-login {
  width: 360px;
  border-color: #7e98df;
  border-radius: 70px;
  color: #7e98df;
  background-color: #fff;
  height: 60px;
  font-size: 16px;
}

.lines {
  width: 100px;
  display: inline-block;
  border-top: 0.5px solid #848484;
  margin: 4px 40px;
}

.btn-login:hover {
  color: #fff;
  background-color: #7e98df;
}

@media (max-width: 600px) {
  .login {
    width: 365px;
  }

  .lines {
    width: 70px;
    margin: 4px 20px;
  }

  .btn-login {
    width: 300px;
    height: 40px;
  }
}
</style>
