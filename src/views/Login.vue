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
            <v-text-field full-width class="input-box" label="Username" outline/>
            <v-text-field full-width class="input-box" type="password" label="Password" outline/>
          </v-card-text>
          <!-- <v-flex xs12 sm6> -->
          <div class="text-xs-center">
            <v-btn
              color="blue"
              outline
              class="button"
              large
            >Forget Password</v-btn>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="blue"
              @click="loader = 'loading'"
              large
              class="button"
            >Log In</v-btn>
          </div>
          <!-- </v-flex> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => {
          this.$router.push('/visitor');
          return this[l] = false;
        }, 2000)

        this.loader = null
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
