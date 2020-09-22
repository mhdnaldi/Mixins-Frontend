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
          <b-form @submit="onSubmit" @reset="onReset">
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
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="text-left"
              style="color: #848484; font-size:14px"
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <b-form-input
                class="input"
                id="input-2"
                type="password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class="text-right mt-4" style="color: #7E98DF; font-size: 14=6px">
            Forgot password?
          </p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12">
          <b-button class="btn-login">Login</b-button>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12">
          <div class="lines"></div>
          <p text-center style="display: inline-block; color:#848484">
            Login with
          </p>
          <div class="lines"></div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-button class="btn-login">Google</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class=" mt-3" style="color: #313131; font-size: 14">
            Don't have an account?
            <span style="color: #7e98df; cursor: pointer">Sign up</span>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {}
  }
}
</script>

<style scoped>
.login {
  width: 500px;
  height: 710px;
  background-color: #fff;
  margin: 50px auto;
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
