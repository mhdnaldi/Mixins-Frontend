<template>
  <div class="about">
    <b-container>
      <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input
            id="input-1"
            required
            v-model="form.username"
            placeholder="Enter username"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Email address:"
          label-for="input-2"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-2"
            type="email"
            v-model="form.email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Your Password:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            type="password"
            v-model="form.password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Select Room:"
          label-for="input-3"
        >
          <b-form-select class="mb-3" v-model="form.room">
            <b-form-select-option :value="null"
              >Please select Room</b-form-select-option
            >
            <b-form-select-option value="html">HTML</b-form-select-option>
            <b-form-select-option value="css">CSS</b-form-select-option>
            <b-form-select-option value="js">JS</b-form-select-option>
          </b-form-select>
        </b-form-group>

        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    form: {
      username: '',
      email: '',
      password: '',
      room: null
    }
  }),
  methods: {
    onSubmit() {
      this.$router.push({
        name: 'Chat',
        params: {
          ...this.form
        }
      })
    },
    onReset() {
      this.form = {
        username: '',
        email: '',
        password: '',
        room: null
      }
    }
  }
}
</script>

<style scoped>
.about {
  text-align: left;
}
</style>
