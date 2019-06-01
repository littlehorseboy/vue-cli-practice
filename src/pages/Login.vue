<template>
  <div id="loginDiv" class="text-center">
    <form class="form-signin">
      <!-- <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->

      <div class="row">
        <div class="slideThree pull-right">
          <input
            type="checkbox"
            v-model="lang"
            :true-value="'tw'"
            :false-value="'en'"
            @change="setLanguage(lang)"
            id="slideThree"/>
          <label for="slideThree"></label>
        </div>
      </div>

      <h1 class="h3 mb-3 font-weight-normal">{{ $t("Please_sign_in") }}</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" :placeholder="$t('Email_address')"
        required="" autofocus="" v-model="email">
      <label for="inputPassword" class="sr-only">Password</label>
      <!--
        2. 在 password input 上面使用 v-toggle-password 帶入 checkbox 的 value
      -->
      <input type="password" id="inputPassword" class="form-control" :placeholder="$t('Password')"
        required="" @keyup.enter="login" v-model="password" v-toggle-password="togglePassword">
      <!-- 1. checkbox 雙向綁定[布林] -->
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" v-model="togglePassword"> {{ $t("Show_password") }}
        </label>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> {{ $t("Remember_me") }}
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">
        {{ $t("Sign_in") }}
      </button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>

    <!-- <div v-test:abccc="aaaaaaaa"></div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'hello',
  data() {
    return {
      email: 'lll@lll.lll',
      password: '',
      togglePassword: false,
      lang: this.$store.state.lang,
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
    ...mapActions([
      'setLanguage',
    ]),
  },
  watch: {
    lang(val) {
      console.log(`lang ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
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

  /* switch */
  $switch-width: 160px;
  $switch-labal-width: 80px;
  $switch-background: #a4daff;
  $switch-font-color: #333;
  .slideThree {
    width: $switch-width;
    height: 26px;
    background: $switch-background;
    position: relative;
    border-radius: 50px;
    box-shado: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,0.2);
    &:after {
      content: 'English';
      color: $switch-font-color;
      position: absolute;
      right: 12px;
      z-index: 0;
      font-size: 12px;
      line-height: 26px;
      text-shadow: 1px 1px 0px rgba(255,255,255,.15);
    }
    &:before {
      content: '繁體';
      color: $switch-font-color;
      position: absolute;
      left: 24px;
      z-index: 0;
      font-size: 12px;
      line-height: 26px;
    }
    label {
      display: block;
      width: $switch-labal-width;
      height: 20px;
      cursor: pointer;
      position: absolute;
      top: 3px;
      left: 3px;
      z-index: 1;
      background: #fcfff4;
      background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
      border-radius: 50px;
      transition: all 0.4s ease;
      box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.3);
    }
    input[type=checkbox] {
      visibility: hidden;
      &:checked + label {
        left: 78px;
      }
    }
  }

</style>
