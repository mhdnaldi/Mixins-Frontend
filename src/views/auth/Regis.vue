<template>
  <div class="login">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h3 class="title">Register</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class="text-left mt-4" style="color: #232323; font-size: 14px;">
            Let's create your account!
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
              label="Name"
              label-for="input-1"
            >
              <b-form-input
                class="input"
                id="input-1"
                type="text"
                v-model="form.user_name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="text-left mt-5"
              style="color: #848484; font-size:14px"
              id="input-group-1"
              label="Phone"
              label-for="input-1"
            >
              <b-form-input
                class="input"
                id="input-1"
                type="text"
                v-model="form.user_phone"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="text-left mt-5"
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
      <b-row class="mt-4">
        <b-col cols="12">
          <b-button class="btn-login" @click="onSubmit">Register</b-button>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12">
          <div class="lines"></div>
          <p text-center style="display: inline-block; color:#848484">MIXINS</p>
          <div class="lines"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      form: {
        user_name: '',
        user_phone: '',
        user_email: '',
        user_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    onSubmit() {
      this.registerUser(this.form)
        .then(res => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: res.msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/login')
        })
        .catch(err => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: err,
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  }
}
</script>

<style scoped>
.login {
  width: 500px;
  padding: 20px;
  height: 780px;
  background-color: #fff;
  border: 1px solid #7e98df;
  border-radius: 20px;
  margin: 20px auto;
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
  border-bottom: 1px solid #848484;
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
