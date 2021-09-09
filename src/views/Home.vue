<template>
  <main-layout>
    <div class="home">
      <!--<HomePage msg="Welcome to Your Vue.js App"/>-->

      <maim class="main_home">

        <section class="left" :class="{'main_title': MODE_STATE}">

          <h1 >Gagarin Farming Pool
            <span>Chia coin XCH</span></h1>

          <a href="#" class="start_farming_link">{{ $t('button') }}<img src="../assets/images/icons/arrow_right.svg"
              alt="link"></a>

          <a href="#" class="connect_link" :class="{'connect_link-dark': MODE_STATE}" >
            <h3 >{{ $t('join_us') }}</h3>
          </a>

          <div class="contact" >
            <a href="#" class="contact--social_link" :class="{'contact-dark': MODE_STATE}">Telegram<img src="../assets/images/icons/telegram.svg"
                alt="telegram_link"></a>
            <a href="#" class="contact--social_link contact--social_link-discord" :class="{'contact-dark': MODE_STATE}">Discord<img class="discord_icon"
                src="../assets/images/icons/discord.svg" alt="discord_link"></a>
          </div>

        </section>
        <!-- /.left -->

        <section class="right">

          <div class="banner" :class="{'banner-dark': MODE_STATE}">
            <h2 class="banner--title" :class="{'banner--title-dark': MODE_STATE}">{{ $t('capacity') }}</h2>
            <p class="banner--text" >50,7 PiB</p>
          </div>

          <div class="banner" :class="{'banner-dark': MODE_STATE}">
            <h2 class="banner--title" :class="{'banner--title-dark': MODE_STATE}">{{ $t('profit')}}</h2>
            <p class="banner--text">30%</p>
          </div>

        </section>
        <!-- /.right -->


      </maim>
      <!-- /.main_home -->

    </div>


    <img class="chia_logo" src="../assets/images/chia_logo.png" alt="chia_logo">
  </main-layout>
</template>

<script>
  // @ is an alias to /src
  import HomePage from '@/components/HomePage.vue';
  import MainLayout from '@/layout/MainLayout.vue';
  import {mapGetters} from "vuex";

  export default {
    name: 'Home',
    components: {
      HomePage,MainLayout
    },
    methods:{
      // DarkMode(data){
      //   this.$emit('mode',data)
      // }
    },
    computed:{
      ...mapGetters([
        'MODE_STATE'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .chia_logo {
    position: absolute;
    top: 870px;
    right: 122px;
    z-index: -1;
  }

  .home {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .main_home {
    position: relative;
    margin: 0 0 334px 0;
    width: 100%;
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
  }



  /*--- left ---*/
  .left {
    width: 100%;
    max-width: 690px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 97px 0 0 0;

    h1 {
      margin: 0 0 30px 0;

      /* h1 */
      font-family: 'Manrope';
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 120%;
      /* or 77px */
      letter-spacing: -0.02em;
      /* light/main */
      color: #4B6067;

      span {
        color: #00B9BD;
      }
    }

  }
  .main_title{
    h1{
      color: #A1D3CE;
    }
  }


  .start_farming_link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 0 24px;
    width: 316px;
    height: 72px;
    margin: 0 0 60px 0;

    text-decoration: none;
    /* light/active */
    background: #00B9BD;
    border-radius: 12px;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    /* identical to box height, or 100% */
    letter-spacing: -0.02em;
    /* light/card (white) */
    color: #FFF;
  }

  .connect_link {
    width: 340px;
    height: 48px;
    display: block;
    text-decoration: none;
    margin: 0 0 30px 0;


    h3 {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      /* or 24px */
      /* light/muted */
      color: rgba(75, 80, 103, 0.6);
    }
  }
  .connect_link-dark{
    h3{
      color: rgba(149, 166, 182, 0.6);
    }
  }


  .contact {
    width: 374px;
    display: flex;
    justify-content: space-between;
  }

  .contact--social_link {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 0 18px;
    width: 178px;
    height: 60px;


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
      width: 36px;
      height: 36px;
    }

    .discord_icon {
      width: 33px;
      height: 38px;
    }
  }
  .contact-dark{
    background: #212121;
  }

  .contact--social_link-discord {
    width: 162px;
  }



  /*--- right ---*/
  .right {
    margin: 54px 0 0 0;
    height: 570px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //padding: 60px;
    width: 420px;
    height: 270px;
    background: #DFF2F6;
    border-radius: 36px;
  }
  .banner-dark{
    background: #17292A;
  }

  .banner--title {
    margin: 0 0 14px 0;
    /* desktop/h2 */
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    /* identical to box height, or 117% */
    text-align: center;
    /* light/muted */
    color: rgba(75, 80, 103, 0.6);
  }

  .banner--text {
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 94px;
    line-height: 94px;
    /* identical to box height, or 100% */
    text-align: center;
    letter-spacing: -0.04em;
    /* light/active */
    color: #00B9BD;
  }
  .banner--title-dark{
    color: #A1D3CE;
  }
</style>