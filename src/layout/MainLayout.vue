<template>
  <div class="layout_wrapper">
    <header class="header">
      <!-- header--inner -->
      <div class="header--inner">

        <div class="wrapper--logo_nav">
          <router-link class="link" to="/">
            <a class="header--logo link" href="#">
              <img src="../assets/images/logo.svg" alt="logo">
            </a>
          </router-link>


          <!-- nav_header -->
          <nav class="nav nav_header">
            <router-link to="/stats" style="text-decoration: none;">
              <a class="nav--link link" href="" :class="{'nav--link-dark': MODE_STATE}">{{$t('Pool_stats')}}</a>
            </router-link>
            <!--            <a class="nav&#45;&#45;link link" href="">Pool Stats</a>-->
            <a class="nav--link link" :class="{'nav--link-dark': MODE_STATE}"  href="#">{{$t('start')}}</a>
            <a class="nav--link link" :class="{'nav--link-dark': MODE_STATE}" href="https://help.ezil.me/l_eng/knowledge_base/category/49731">{{$t('help')}}</a>
            <a class="nav--link link" :class="{'nav--link-dark': MODE_STATE}" href="https://blog.ezil.me/">{{$t('blog')}}</a>
            <router-link to="/teams" style="text-decoration: none;">
              <a class="nav--link link" :class="{'nav--link-dark': MODE_STATE}" href="">{{$t('team')}}</a>
            </router-link>
          </nav>
          <!-- /.nav_header -->

        </div>
        <!-- /.wrapper--logo_nav -->

        <div class="btn_wrapper">
          <button class="night" v-if="MODE_STATE" @click="DarkMode"></button>
          <button class="light" v-else @click="DarkMode"></button>
          <div class="select">
            <select
                name="language"
                id="language"
                class="language"
                v-model="selectedLang"
                @change="setLang()"
            >
              <option selected value="en">Eng</option>
              <option value="ru">Rus</option>

            </select>
            <span></span>
          </div>
          <button @click='learnVue' class="login_btn">{{$t('login')}}<img src="../assets/images/icons/login.svg"
              alt="login"></button>
          <button class="login_btn logout_btn">0xe454...<img src="../assets/images/icons/logout.svg"
              alt="logout"></button>
          <login ref="confirmationPopup">
            
            
          </login>
        </div>
        <!-- /.btn_wrapper -->


      </div>
      <!-- /.header--inner -->

    </header>

    <slot></slot>

    <footer class="footer">
      <div class="footer--inner">
        <!-- nav_footer -->
        <nav class="nav nav_footer">
          <a class="nav--link link" href="#">Cookies Policy</a>
          <a class="nav--link link" href="#">Privacy Policy</a>
          <a class="nav--link link" href="#">Terms of operations</a>
          <a class="nav--link link" href="#">User’s Guide</a>
        </nav>
        <!-- /.nav_footer -->

        <div class="footer--social">
          <a class="footer--social_link" href="#">
            <img src="../assets/images/icons/twitter.svg" alt="twitter"></a>

          <a class="footer--social_link" href="#">
            <img src="../assets/images/icons/reddit.svg" alt="social_ x"></a>
        </div>
        <!-- /.footer_social -->
      </div>
      <!-- /.footer--inner -->

    </footer>
  </div>
</template>

<script>
  import Login from "@/components/Login.vue";
  import {mapActions, mapGetters} from 'vuex'


  export default {
    name: 'MainLayout',
    components: {
        Login
    },
    data() {
      return {
        confirmation: "",
        selectedLang:"en",
        // nightMode:false
      };
    },

    CONFIRMATION_TEXT: "ПОДТВЕРЖДАЮ",

    computed: {
      isConfirmationCorrect() {
        return this.confirmation === this.$options.CONFIRMATION_TEXT;
      },
      ...mapGetters([
          'MODE_STATE'
      ])
    },

    methods: {
      async learnVue() {
        this.confirmation = "";

        const popupResult = await this.$refs.confirmationPopup.open();

        if (popupResult) {
          alert("Confirmed!");
        }
      },
      setLang(){
        this.$i18n.locale = this.selectedLang
      },
      ...mapActions([
          'TOGGLE_MODE'
      ]),
      DarkMode(){
        this.TOGGLE_MODE()
        // this.nightMode = !this.nightMode
        // this.$store.state.DarkModePage = this.nightMode
        // this.$emit('mode',this.nightMode)
      }
    },
    mounted() {
      this.selectedLang = this.$i18n.locale
    },
    // watch:{
    //   nightMode:function (){
    //     this.$store.state.DarkModePage = this.nightMode
    //   }
    // }
  };
</script>

<style scoped lang='scss'>
.link {
  text-decoration: none;
}

  /* Header */

  .header,
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .header--inner {
    margin: 27px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .wrapper--logo_nav {
    display: flex;
  }

  .header--logo {
    display: flex;
    align-items: center;
    margin: 0 90px 0 0;

    img {
      width: 163.35px;
      height: 30px;
    }
  }


  /* nav */

  .nav {
    display: flex;
  }

  .nav_header {
    //margin: 0 223px 0 0;

    .nav--link {
      text-decoration: none;
      margin: 0 30px 0 0;
      height: 36px;
      font-family: 'Manrope';
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      //line-height: 24px;
      /* identical to box height, or 109% */
      /* light/active */
      color: #4B6067;
      border-bottom: solid 2px transparent;

      &:hover {
        color: #00B9BD;
        border-bottom: solid 2px #00B9BD;
      }
    }
    .nav--link-dark{
      color: #A1D3CE;
    }
  }




  .btn_wrapper {
    //width: 299px;
    display: flex;
    //justify-content: space-between;
  }

  .night {
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: 1px solid rgba(0, 185, 189, 0.1);
    border-radius: 12px;
    background: transparent url(../assets/images/icons/moon.svg) center no-repeat;
  }
  .light{
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: 1px solid rgba(0, 185, 189, 0.1);
    border-radius: 12px;
    background: transparent url(../assets/images/icons/sun.svg) center no-repeat;
  }


  /* select */

  .select {
    position: relative;
    margin: 0 12px;


    span {
      pointer-events: none;
      margin: -3px 0 0 0;
      width: 14px;
      height: 7px;
      z-index: 99;
      display: block;
      position: absolute;
      top: 50%;
      right: 20.5px;
      background: transparent url(../assets/images/icons/v.svg) center no-repeat;
    }
  }

  .language {
    appearance: none;
    //-webkit-appearance: none;
    width: 99px;
    height: 48px;
    padding: 0 38px 0 12px;
    border: 1px solid rgba(0, 185, 189, 0.1);
    //box-sizing: border-box;
    border-radius: 12px;
    background: transparent;
    /* desktop/text */

    font-family: 'Manrope';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    //line-height: 24px;
    /* identical to box height, or 109% */
    /* light/active */
    color: #00B9BD;
  }

  .login_btn {
    display: flex;
    //justify-content: space-between;
    align-items: center;
    cursor: pointer;
    //width: 128px;
    height: 48px;
    padding: 0 18px;
    background: rgba(0, 185, 189, 0.1);
    border-radius: 12px;
    border: none;

    /* desktop/text */

    font-family: 'Manrope';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;
    /* identical to box height, or 109% */
    /* light/active */
    color: #00B9BD;


    img {
      width: 24px;
      height: 24px;
      margin: 0 0 0 15px;
    }
  }

  .logout_btn {
    display: none;
  }


  /* ------- footer ------- */

  .footer--inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    width: 100%;
    height: 84px;
  }

  .nav_footer {


    a {
      text-decoration: none;
      margin: 0 30px 0 0;
      /* desktop/text */
      font-family: 'Manrope';
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 24px;
      /* identical to box height, or 109% */
      /* light/main */
      color: #4B6067;
    }
  }

  .footer--social {
    width: 96px;
    display: flex;
    justify-content: space-between;


    img,
    a {
      width: 36px;
      height: 36px;
    }
  }


  /* wrapper_flex */

  .wrapper_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>