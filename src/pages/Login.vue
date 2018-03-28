<template>
  <div id="loginDiv" class="text-center">
    <form class="form-signin">
      <!-- <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address"
        required="" autofocus="" v-model="email">
      <label for="inputPassword" class="sr-only">Password</label>
      <!--
        2. 在 password input 上面使用 v-toggle-password 帶入 checkbox 的 value
      -->
      <input type="password" id="inputPassword" class="form-control" placeholder="Password"
        required="" @keyup.enter="login" v-model="password" v-toggle-password="togglePassword">
      <!-- 1. checkbox 雙向綁定[布林] -->
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" v-model="togglePassword"> 顯示密碼
        </label>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>

    <!-- <div v-test:abccc="aaaaaaaa"></div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'hello',
  data() {
    return {
      email: 'lll@lll.lll',
      password: '',
      togglePassword: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch('actionLogin', {
        email: this.email,
        password: this.password,
      }).then(() => { // 接收 resolve
        console.log('3. get Promise resolve');
        setTimeout(() => {
          // 使用 $router.push 轉跳到 hello Page
          this.$router.push('/hello');
        }, 300);
      }).catch(() => { // 接收 reject
        console.log('error get Promise reject!');
      });
    },
  },
};
</script>

<style scoped>
#loginDiv {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
