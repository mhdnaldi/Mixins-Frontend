<template>
  <div class="login">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h3 class="title">Forgot Password</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class="text-left mt-5" style="color: #232323; font-size: 14px">
            You'll get message soon on your email
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
                v-model="user_email"
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12">
          <b-button class="btn-login" type="submit" @click="onSubmit"
            >Send</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Forgot',
  data() {
    return {
      user_email: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user_email)
      this.$router.push('/login')
    }
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

.btn-login:hover {
  color: #fff;
  background-color: #7e98df;
}

@media (max-width: 600px) {
  .login {
    width: 365px;
  }

  .btn-login {
    width: 300px;
    height: 40px;
  }
}
</style>
