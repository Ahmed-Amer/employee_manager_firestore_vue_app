<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel green white-text center">
                        <h3>Login</h3>
                        <form>
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="email" id="email" v-model="email">
                                <label class="white-text" for="email">Email Address</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label class="white-text" for="password">Password</label>
                            </div>
                            <button @click.prevent="login"
                                class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'login',
    data: function () {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login: function () {

            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert('Welcome ' + auth.currentUser.email);
                     this.$router.push('/');
                    //this.$router.go({ path: this.$router.path });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                   alert(errorMessage)
                });
        }
    }
};
</script>