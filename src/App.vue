<template>
  <div class="main" :class="{'theme-dark': MODE_STATE}">
    <div class="container">
        <div id="app" >
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
  import MainLayout from "@/layout/MainLayout";
  import Home from "@/views/Home";
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
      }
    },
    name: "App",
    components: {
      Home,
      MainLayout

    },
    methods:{
      // DarkMode(data){
      //   this.darkMode = data
      //   console.log('состояние', data)
      // }
    },
    computed:{
      ...mapGetters([
          'MODE_STATE'
      ])
    }
  };
</script>

<style lang="scss">
  @import url('http://fonts.cdnfonts.com/css/manrope');

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  .theme-dark{
    background: #1A1A1A;
  }

  body {
    background: #F7F8FC;

  }


  .container {
    width: 100%;
    margin: auto;
    max-width: 1170px;
  }

  p,
  h1 {
    font-family: 'Manrope', sans-serif;
  }

  .GagarinPool_logged {
    margin: 60px 0 0 0;
  }
</style>