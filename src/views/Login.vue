<template>
  <v-container fluid class="pa-0">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Admin Panel</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-layout class="login-card-conatiner" align-center>
      <v-flex xs12 sm6 offset-md3>
        <v-card class="card-body">
          <v-card-title primary-title>
            <p class="login-card-title">Login To Continue</p>
          </v-card-title>

          <v-card-text>
            <v-form>
              <v-container>
                <v-layout row wrap>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="Username"
                    class="input-box"
                  ></v-text-field>
                    <v-text-field
                      :append-icon="show ? 'visibility' : 'visibility_off'"
                      :rules="[rules.required, rules.min]"
                      :type="show ? 'text' : 'password'"
                      name="input-10-2"
                      label="Password"
                      hint="At least 8 characters"
                      class="input-group--focused input-box"
                      @click:append="show = !show"
                    ></v-text-field>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <div class="text-xs-center">
            <v-btn color="primary" outline class="button" large>Forget Password</v-btn>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="primary"
              @click="loader = 'loading'"
              large
              class="button"
            >Log In</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,
      email: "",
      show: false,
      password: "",
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => {
        this.$router.push({ path: "/home" });
        return (this[l] = false);
      }, 2000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
.theme--light.v-list {
  background: #f5f5f5;
}
.headline {
  margin-left: 44%;
}
.button {
  width: 18vw;
  font-family: Roboto;
  color: white;
  margin-top: 0;
  margin-bottom: 30px;
}
.login-card-conatiner {
  margin-top: 10%;
}
.card-body {
  box-shadow: 3px 2px 3px 2px #a1a1a1;
}
.login-card-title {
  font-size: 30px;
  margin-left: 35%;
  font-family: Roboto;
}
.input-box {
  margin: 10px 90px;
  font-size: 20px;
  font-family: roboto;
}
</style>
