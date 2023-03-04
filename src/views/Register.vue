<template>
    <div>
      <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel grey lighten-4 black-text center">
            <h3>Register</h3>
            <form>
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" v-model="email">
                <label for="email">Email Address</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password">
                <label for="password">Password</label>
              </div>
              <button @click.prevent="register" class="btn btn-large btn-extended grey lighten-4 black-text">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  export default {
    
    name: 'register',
    data: function() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      register: function() {
        console.log(this.email);
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                     this.$router.push('/');
                    // this.$router.go({ path: this.$router.home });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    // ..
                });

      }
    }
  };
  </script>